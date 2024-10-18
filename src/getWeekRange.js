// New helper function to get the start (Monday) and end (Sunday) of the week
export function getWeekRange (date) {
    const start = new Date(date);
    const end = new Date(date);
    
    // Get the first day of the week (Monday)
    const day = start.getDay();
    const diff = (day >= 1 ? day - 1 : 6) * -1; // Adjust for Monday
    start.setDate(start.getDate() + diff);
    
    // Get the last day of the week (Sunday)
    end.setDate(start.getDate() + 6);
    
    return { start, end };
  };
  