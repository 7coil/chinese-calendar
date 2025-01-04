import { ReactNode, useState } from "react";
import { CalendarSheet } from "./components/CalendarSheet";

function App() {
  const [date, setDate] = useState(new Date());
  const [numCals, setNumCals] = useState(1);
  const [advertising, setAdvertising] = useState(false);

  const year = date.getFullYear();
  const month = date.getMonth();

  const calendars: ReactNode[] = [];

  for (let i = 0; i < numCals; i++) {
    calendars.push(<CalendarSheet key={i} year={year} month={month + i + 1} advertising={advertising} />);
  }

  return (
    <div>
      <div className="controls">
        <h1>Chinese Calendar Simulator 2025</h1>
        <fieldset>
          <legend>Starting Month</legend>
          <button onClick={() => setDate(new Date(year, month - 1))}>
            &lt;
          </button>
          <span>
            {year} - {month + 1}
          </span>
          <button onClick={() => setDate(new Date(year, month + 1))}>
            &gt;
          </button>
        </fieldset>
        <fieldset>
          <legend>Number of months to generate</legend>
          <input
            type="number"
            value={numCals}
            min={0}
            max={24}
            onChange={(x) => {
              let val = parseInt(x.target.value, 10);
              if (isNaN(val) || val <= 0) val = 1;
              setNumCals(val);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <legend>Display advertising</legend>
          <label htmlFor="advertising">Display advertising</label>
          <input
            id="advertising"
            type="checkbox"
            checked={advertising}
            onChange={(x) => setAdvertising(x.target.checked)}
          ></input>
        </fieldset>
      </div>
      {calendars}
    </div>
  );
}

export default App;
