import { monthTipsArray } from "./inBetween"

const july = [];
const august = [];

export function classification(tips) {
  // Clear arrays at the beginning of the function
  july.length = 0;
  august.length = 0;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function daysInMonth(year, month) {
    // console.log(new Date(year, month, 0).getDate())
    return new Date(year, month, 0).getDate();
  }
  daysInMonth(2024, 7)

  if (tips) {
    let startDate;
    let endDate;
    for (let i = 0; i < tips.length; i++) {
      const year = tips[i].date.slice(6, 10);
      const day = tips[i].date.slice(3, 5);
      const month = tips[i].date.slice(0, 2);
    //   console.log(`${year}-${month}-${day}`);

    //   console.log(month);
      if (month === "07") {
        july.push(tips[i]);
      }
      if (month === "08") {
        august.push(tips[i]);
      }
    }
  }
//   console.log("july", july);
//   console.log("august", august);
monthTipsArray(july);
monthTipsArray(august);
}

// const months = [
//     {
//         name: "January",
//         numberOfDays:
//         data:
//     },
//     {
//         name: "February",
//         data:
//     },
//     {
//         name: "March",
//         data:fdss
//     },
//     {
//         name: "April",
//         data:
//     },
//     {
//         name: "May",
//         data:
//     },
//     {
//         name: "June",
//         data:
//     },
//     {
//         name:  "July",
//         data:
//     },
//     {
//         name: "August",
//         data:
//     },
//     {
//         name: "September",
//         data:
//     },
//     {
//         name: "October",
//         data:
//     },
//     {
//         name: "November",
//         data:
//     },
//     {
//         name: "December",
//         data:
//     }
//   ];
