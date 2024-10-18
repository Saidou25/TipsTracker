import { monthTipsArray } from "./inBetween"

const july = [];
const august = [];

export function classification(tips) {
  // Clear arrays at the beginning of the function
  july.length = 0;
  august.length = 0;

  function daysInMonth(year, month) {
    // console.log(new Date(year, month, 0).getDate())
    return new Date(year, month, 0).getDate();
  }
  daysInMonth(2024, 7)

  if (tips) {
    for (let i = 0; i < tips.length; i++) {
      const month = tips[i].date.slice(0, 2);
      if (month === "07") {
        july.push(tips[i]);
      }
      if (month === "08") {
        august.push(tips[i]);
      }
    }
  }
monthTipsArray(july);
monthTipsArray(august);
}

