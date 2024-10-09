export function monthTipsArray(newTipsArr) {
  // Initialize an object to hold tips for all months
  const tipsByMonth = {
    "01": [],
    "02": [],
    "03": [],
    "04": [],
    "05": [],
    "06": [],
    "07": [],
    "08": [],
    "09": [],
    "10": [],
    "11": [],
    "12": [],
  };

  // Group tips by month
  if (newTipsArr) {
    for (let newTip of newTipsArr) {
      const month = newTip.date.split("/")[0];
      const day = newTip.date.split("/")[1]; // Get the day

      // Check if the month exists in tipsByMonth and if the day isn't already added
      if (tipsByMonth[month]) {
        // Check if we already have a tip for this day in the month
        const dayIndex = tipsByMonth[month].findIndex(tip => tip.date.split("/")[1] === day);

        if (dayIndex === -1) {
          // Only push if there isn't already a tip for that day
          tipsByMonth[month].push(newTip);
        }
      }
    }
  }

  // Build month arrays and include default entries
  const combinedMonthArray = [];

  for (let month = 1; month <= 12; month++) {
    const monthStr = String(month).padStart(2, '0'); // Ensure month is two digits
    if (tipsByMonth[monthStr].length > 0) { // Only build month arrays for months with tips
      const monthArray = buildMonthArray(tipsByMonth[monthStr], 2024, month);
      combinedMonthArray.push(...monthArray); // Always push the month array
    }
  }

  // Filter out duplicates based on date
  const uniqueDates = new Set();
  const filteredMonthArray = combinedMonthArray.filter((tip) => {
    const dateKey = tip.date;
    if (uniqueDates.has(dateKey)) {
      return false; // Skip duplicates
    } else {
      uniqueDates.add(dateKey);
      return true; // Keep unique entries
    }
  });

  // Return all tips, including default entries for days without tips
  return filteredMonthArray; // Changed to return filteredMonthArray
}

function buildMonthArray(tips, year, month) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const monthArray = [];

  const tipsMap = new Map();
  for (const tip of tips) {
    const day = parseInt(tip.date.slice(3, 5));
    tipsMap.set(day, tip);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const tip = tipsMap.get(day) || {
      TipsNet: "-",
      TipsGross: "-",
      dayName: new Date(year, month - 1, day).toLocaleDateString("en-US", {
        weekday: "long",
      }),
      date: `${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")}/${year}`,
    };
    monthArray.push(tip);
  }

  return monthArray;
}