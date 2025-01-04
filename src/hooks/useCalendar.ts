interface CalendarCell {
  n: number | null;
  i: number;
  j: number;
  colspan: number;
}

const useCalendar = ({ month, year }: { month: number; year: number }) => {
  const date = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();

  // Like most things, Americans are also wrong about Sunday being the first day of the week
  const day = date.getDay();
  const dayOfWeek = day === 0 ? 7 : day;
  const startingBlankSpots = dayOfWeek - 1;
  const endingBlankSpots = (7 - (startingBlankSpots + daysInMonth) % 7) % 7;
  const numberOfRows = Math.ceil((startingBlankSpots + daysInMonth) / 7);
  const layout: CalendarCell[][] = [[]];

  if (startingBlankSpots > 0) layout[0].push({ n: null, i: 0, j: 0, colspan: startingBlankSpots })

  for (let dayOfMonth = 1; dayOfMonth <= daysInMonth; dayOfMonth++) {
    const cellPos = dayOfMonth + startingBlankSpots - 1;
    const i = cellPos % 7;
    const j = Math.floor(cellPos / 7);

    if (!layout[j]) layout[j] = [];
    layout[j].push({ n: dayOfMonth, i, j, colspan: 1 });
  }

  if (endingBlankSpots > 0) layout[layout.length - 1].push({ n: null, i: 0, j: layout.length - 1, colspan: endingBlankSpots })

  return {
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    daysInMonth,
    dayOfWeek,
    blankSpots: startingBlankSpots,
    numberOfRows,
    layout,
    copy: {
      en: {
        longLabel: date.toLocaleString("en-GB", { month: "long" }),
        shortLabel: date.toLocaleString("en-GB", { month: "short" }),
      },
      zh: {
        longLabel: date.toLocaleString("zh-CN", { month: "long" }),
        shortLabel: date.toLocaleString("zh-CN", { month: "short" }),
      }
    }
  };
};

export { useCalendar };
