export function monthTipsArray(augustTips) {
  console.log(augustTips);

function buildMonthArray(augustTips, year, month) {
    // Create an array to store all days of the month
    const daysInMonth = new Date(year, month, 0).getDate(); // Get total number of days in the month
    const monthArray = [];

    // Create a map of existing augustTips by day
    const tipsMap = new Map();
    console.log(tipsMap)
    for (const tip of augustTips) {
        const day = parseInt(tip.date.slice(3, 5)); // Extract day from the "date" field
        tipsMap.set(day, tip);
    }

    // Loop over all days in the month
    for (let day = 1; day <= daysInMonth; day++) {
        // If the augustTips map has data for this day, use it. Otherwise, fill it with default values.
        const tip = tipsMap.get(day) || {
            TipsNet: "0",
            TipsBrut: "0",
            dayName: new Date(year, month - 1, day).toLocaleDateString('en-US', { weekday: 'long' }),
            date: `${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`
        };
        monthArray.push(tip);
    }

    return monthArray;
}

// Example usage:
const year = 2024;
const month = 8; // August (months are 1-indexed)
const result = buildMonthArray(augustTips, year, month);

console.log(result);


}
