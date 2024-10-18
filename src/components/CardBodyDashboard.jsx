import { useEffect, useState } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { monthTipsArray } from "../inBetween";
import useMonitorWidth from "../UseMonitorWidth";
import "./Card.css";

const CardBodyDashboard = ({ cardBodyTemplate }) => {
  const [displayTips, setDisplayTips] = useState([]);
  const { showDashboardMediaView } = useMonitorWidth();
  const today = new Date();

  useEffect(() => {
    let allTips = [];

    if (cardBodyTemplate.tips) {
      const tipsArray = Array.isArray(cardBodyTemplate.tips)
        ? cardBodyTemplate.tips
        : [cardBodyTemplate.tips];

      allTips = monthTipsArray(tipsArray);
    }

    const filteredTips = allTips.filter((tip) => {
      let tipDate = new Date(tip.date);
      return tipDate <= today; // Only include tips up to today
    });

    // Sort tips by date
    filteredTips.sort((a, b) => new Date(a.date) - new Date(b.date));

    setDisplayTips(filteredTips);
  }, [cardBodyTemplate]);

  // Function to group tips by week, starting each week on Monday
  const groupTipsByWeek = (tips) => {
    const grouped = {};
    tips.forEach((tip) => {
      const tipDate = new Date(tip.date);
      const dayOfWeek = tipDate.getUTCDay();

      // Calculate Monday's date for the current week
      const mondayDate = new Date(tipDate);
      mondayDate.setDate(tipDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

      const weekKey = mondayDate.toISOString().split('T')[0]; // Use Monday's date as the key
      if (!grouped[weekKey]) {
        grouped[weekKey] = [];
      }
      grouped[weekKey].push(tip);
    });
    return grouped;
  };

  // Render the column titles
  const renderTitles = () => {
    return (
      <div className="row dashboard-alignment font-weight bg-secondary g-0">
        {showDashboardMediaView === false ? (
          <>
            <span className="col-2">month</span>
            <span className="col-3">week day</span>
            <span className="col-3">date</span>
            <span className="col-2">
              <FaSackDollar />
              <span>gross</span>
            </span>
            <span className="col-2">
              <GiCoins />
              net
            </span>
          </>
        ) : (
          <>
            <span className="col-4">date</span>
            <span className="col-4">
              <FaSackDollar />
              gross
            </span>
            <span className="col-4">
              <GiCoins />
              net
            </span>
          </>
        )}
      </div>
    );
  };

  // Render tips grouped by week
  const renderTipsByWeek = () => {
    const groupedTips = groupTipsByWeek(displayTips);
    const weekKeys = Object.keys(groupedTips);

    // Sort weekKeys in descending order based on the start date
    weekKeys.sort((a, b) => new Date(b) - new Date(a));

    return weekKeys.map((weekKey) => {
      const weekTips = groupedTips[weekKey];

      // Calculate the total tips for the week
      let netTotal = 0;
      let grossTotal = 0;
      weekTips.forEach((tip) => {
        netTotal += parseInt(tip.TipsNet) || 0;
        grossTotal += parseInt(tip.TipsGross) || 0;
      });

      // Get the date of the Monday for the week announcement
      const weekStartDate = new Date(weekKey);
      // const formattedDate = `${(weekStartDate.getMonth() + 1).toString().padStart(2, '0')}/${weekStartDate.getDate().toString().padStart(2, '0')}/${weekStartDate.getFullYear()}`;

      // Get the date of the first tip of the week for correct "Week starting on" display
      const firstTipDate = new Date(weekTips[0].date);
      const firstTipDayOfWeek = firstTipDate.getUTCDay();

      // Calculate the date for "Week starting on" to ensure it is the Monday of the week
      const weekStartingDate = new Date(firstTipDate);
      weekStartingDate.setDate(firstTipDate.getDate() - (firstTipDayOfWeek === 0 ? 6 : firstTipDayOfWeek - 1));
      const weekStartingFormattedDate = `${(weekStartingDate.getMonth() + 1).toString().padStart(2, '0')}/${weekStartingDate.getDate().toString().padStart(2, '0')}/${weekStartingDate.getFullYear()}`;

      return (
        <div key={weekKey}>
          {/* Announce the start of the week */}
          {/* <h3>Week starting on {weekStartingFormattedDate}</h3> */}

          {weekTips.map((tip, index) => (
            <div className="row g-0" key={`${tip.date}-${index}`} tip={tip}>
              {showDashboardMediaView === false && (
                <>
                  <span className="col-2">
                    {(() => {
                      const [month, day, year] = tip.date.split("/");
                      const correctedDate = new Date(year, parseInt(month, 10) - 1, day);
                      return correctedDate.toLocaleDateString("en-US", { month: "long" });
                    })()}
                  </span>
                  <span className="col-3">{tip.dayName}</span>
                  <span className="col-3">{tip.date}</span>
                  <span className="col-2">{tip.TipsGross}</span>
                  <span className="col-2">{tip.TipsNet}</span>
                </>
              )}
              {showDashboardMediaView === true && (
                <>
                  <span className="col-4">{tip.date}</span>
                  <span className="col-4">{tip.TipsGross}</span>
                  <span className="col-4">{tip.TipsNet}</span>
                </>
              )}
            </div>
          ))}
          {/* Render weekly totals after each week */}
          <div className="row bg-info g-0">
            <span className="col-2 font-weight">Total:</span>
            <span className="col-6"></span>
            <span className="col-2">{grossTotal}</span>
            <span className="col-2">{netTotal}</span>
          </div>
          {/* Render titles after the weekly total */}
          <div className="row g-0">
            <span className="col-12 bg-info">
              {renderTitles()}
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="wild">
      {renderTitles()} {/* Render titles at the top */}
      <div className="dashboard-alignment py-2">
        {renderTipsByWeek()}
      </div>
    </div>
  );
};

export default CardBodyDashboard;
