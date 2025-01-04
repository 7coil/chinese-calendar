import "./MassiveCalendar.css";
import { useCalendar } from "../hooks/useCalendar";
import cx from "classnames";

const MassiveCalendar = ({
  month,
  year,
  className,
}: {
  month: number;
  year: number;
  className?: string;
}) => {
  const data = useCalendar({ month, year });

  return (
    <table className={cx("massive-calendar--table", className)}>
      <thead>
        <tr>
          <th className="massive-calendar--weekday-1">Mon 星期一</th>
          <th className="massive-calendar--weekday-2">Tue 星期二</th>
          <th className="massive-calendar--weekday-3">Wed 星期三</th>
          <th className="massive-calendar--weekday-4">Thu 星期四</th>
          <th className="massive-calendar--weekday-5">Fri 星期五</th>
          <th className="massive-calendar--weekday-6">Sat 星期六</th>
          <th className="massive-calendar--weekday-7">Sun 星期日</th>
        </tr>
      </thead>
      <tbody>
        {data.layout.map((x, j) => (
          <tr key={j}>
            {x.map((y, i) => (
              <td
                className={cx(
                  `massive-calendar--weekday-${y.i + 1}`,
                  `massive-calendar--colspan-${y.colspan}`,
                  { "massive-calendar--day": y.n }
                )}
                colSpan={y.colspan}
                key={i}
              >
                {y.n && <span className="massive-calendar--value">{y.n}</span>}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { MassiveCalendar };
