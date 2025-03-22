import "./MiniCalendar.css";
import { useCalendar } from "../hooks/useCalendar";
import cx from "classnames";

const MiniCalendar = ({
  month,
  year,
  side,
  className,
}: {
  month: number;
  year: number;
  side: "left" | "right";
  className?: string;
}) => {
  const data = useCalendar({ month, year });

  return (
    <div className={cx("mini-calendar--container", `mini-calendar--${side}-side`, className)}>
      <div className="mini-calendar--sidebar">
        <div className="mini-calendar--sidebar--month-digit">
          {data.month}
        </div>
        <div className="mini-calendar--sidebar--month-label">
          {data.copy.en.shortLabel}
        </div>
        <div className="mini-calendar--sidebar--year">
          {data.year}
        </div>
      </div>
      <div>
        <table className="mini-calendar--table">
          <thead>
            <tr>
              <th className="mini-calendar--weekday-1">Mon</th>
              <th className="mini-calendar--weekday-2">Tue</th>
              <th className="mini-calendar--weekday-3">Wed</th>
              <th className="mini-calendar--weekday-4">Thu</th>
              <th className="mini-calendar--weekday-5">Fri</th>
              <th className="mini-calendar--weekday-6">Sat</th>
              <th className="mini-calendar--weekday-7">Sun</th>
            </tr>
          </thead>
          <tbody>
            {data.layout.map((x, j) => (
              <tr key={j}>
                {x.map((y, i) => (
                  <td
                    className={`mini-calendar--weekday-${
                      y.i + 1
                    } massive-calendar--colspan-${y.colspan}`}
                    colSpan={y.colspan}
                    key={i}
                  >
                    {y.n}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { MiniCalendar };
