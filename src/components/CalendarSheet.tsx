import { useCalendar } from "../hooks/useCalendar";
import { SideImage } from "./SideImage";
import "./CalendarSheet.css";
import { MassiveCalendar } from "./MassiveCalendar";
import { MiniCalendar } from "./MiniCalendar";

const CalendarSheet = ({
  month,
  year,
  advertising,
}: {
  month: number;
  year: number;
  advertising?: boolean;
}) => {
  const data = useCalendar({ month, year });

  return (
    <div className="calendar-sheet--container">
      <div className="calendar-sheet--page">
        <div className="calendar-sheet--header">
          <div className="calendar-sheet--header--previous-month">
            <MiniCalendar
              className="calendar-sheet--header--previous-month--calendar"
              year={year}
              month={month - 1}
            />
          </div>
          <div className="calendar-sheet--header--year">
            <div>{year}</div>
          </div>
          <div className="calendar-sheet--header--month">
            <div className="calendar-sheet--header--month--digit">{month}</div>
            <div className="calendar-sheet--header--month--label">
              {data.copy.en.longLabel} {data.copy.zh.longLabel}
            </div>
          </div>
          <div></div>
          <div className="calendar-sheet--header--next-month">
            <MiniCalendar
              className="calendar-sheet--header--next-month--calendar"
              year={year}
              month={month + 1}
            />
          </div>
        </div>
        <div className="calendar-sheet--body">
          {advertising && (
            <div className="calendar-sheet--body--side-image">
              <SideImage />
            </div>
          )}
          <div className="calendar-sheet--body--current-month">
            <MassiveCalendar
              className="calendar-sheet--body--current-month--calendar"
              year={year}
              month={month}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CalendarSheet };
