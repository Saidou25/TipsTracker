export function dateFormat(date) {

    // Getting the full length of the day
    const fullDayName = date.toLocaleString("en-US", { weekday: "long" });
    // Format the date as MM/DD/YYYY
    // const formattedDate = "01/15/2025"; for testing
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    return { fullDayName, formattedDate };
}
 
 
//  const date = useMemo(() => new Date(), []);