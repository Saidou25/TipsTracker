export function monthTipsArray(newTipsArr) {
  // Initialize an object to hold tips for both July and August
  const tipsByMonth = {
    "07": [],
    "08": [],
  };
//   console.log(newTipsArr);
  // Group tips by month (07 = July, 08 = August)
  if (newTipsArr) {
    for (let newTip of newTipsArr) {
      const month = newTip.date.split("/")[0]; // Extract the month from the date
      if (month === "07" || month === "08") {
        tipsByMonth[month].push(newTip); // Push the tip into the respective month
      }
    }
  }

  // Build month arrays for both July and August
  const julyArray = buildMonthArray(tipsByMonth["07"], 2024, 7); // July (month 07)
  const augustArray = buildMonthArray(tipsByMonth["08"], 2024, 8); // August (month 08)

  // Combine both month arrays into one
  const combinedMonthArray = [...julyArray, ...augustArray];

  // console.log("Combined Tips Array:", combinedMonthArray);

  // Return the combined array containing both July and August tips
  return combinedMonthArray;
}

function buildMonthArray(tips, year, month) {
  // Get total number of days in the month
  const daysInMonth = new Date(year, month, 0).getDate();
  const monthArray = [];

  // Create a map of existing tips by day
  const tipsMap = new Map();
  for (const tip of tips) {
    const day = parseInt(tip.date.slice(3, 5)); // Extract the day from the date
    tipsMap.set(day, tip);
  }

  // Loop over all days in the month
  for (let day = 1; day <= daysInMonth; day++) {
    // Use the tip from the map if it exists, otherwise use default values
    const tip = tipsMap.get(day) || {
      TipsNet: "-",
      TipsBrut: "-",
      dayName: new Date(year, month - 1, day).toLocaleDateString("en-US", {
        weekday: "long",
      }),
      date: `${String(month).padStart(2, "0")}/${String(day).padStart(
        2,
        "0"
      )}/${year}`,
    };
    monthArray.push(tip);
  }

  return monthArray;
}
