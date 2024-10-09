import { useEffect, useState } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { monthTipsArray } from "../inBetween";
import useMonitorWidth from "../UseMonitorWidth";

import "./Card.css";

const CardBodyDashboard = ({ cardBodyTemplate }) => {
  const [displayTips, setDisplayTips] = useState();

  const { showDashboardMediaView } = useMonitorWidth(); // Evaluate if user is on a mobile screen or not

  const today = new Date(); // get today's date
  // ______________________________code for adding tips and display a weekly total tips___________________________
  const newTipsArr = [];
  let weeklyTipsNet;
  let weeklyTipsGross;
  // console.log("newTipsArr", newTipsArr)

  useEffect(() => {
    if (cardBodyTemplate.tips) {
      // Checks if tips is an array or object and handles accordingly
      const tipsArray = Array.isArray(cardBodyTemplate.tips) ? cardBodyTemplate.tips : [cardBodyTemplate.tips];
      const currentUserTips = monthTipsArray(tipsArray);
      const filteredTips = currentUserTips.filter((tip) => {
        let tipDate = new Date(tip.date);
        return tipDate <= today;
      });
      setDisplayTips(filteredTips);
    } else {
      // console.log("No tips data available.");
      setDisplayTips([]);
    }
    if (newTipsArr.length) {
      const currentUserTips = monthTipsArray(newTipsArr);
      const filteredTips = currentUserTips.filter((tip) => {
        let tipDate = new Date(tip.date);
        return tipDate <= today; // Only return tips from today or earlier
      });
      setDisplayTips(filteredTips);
    }
  }, [cardBodyTemplate, setDisplayTips]);

  // --------------------- render the columns' titles --------------
  const renderTitles = () => {
    return (
      <div className="row dashboard-alignment font-weight bg-secondary g-0">
        {showDashboardMediaView === false ? ( // if not mobile screen then we display that way
          <>
            <span className="col-2">month</span>
            <span className="col-3">week day</span>
            <span className="col-3">date</span>
            <span className="col-2">
              <FaSackDollar />
              <span>
                tips(<i>gross</i>)
              </span>
            </span>
            <span className="col-2">
              <GiCoins />
              tips(<i>net</i>)
            </span>
          </>
        ) : (
          // if mobile screen we display that way
          <div className="">
            <span className="col-4">date</span>
            <span className="col-4">
              <FaSackDollar />
              tips(<i>gross</i>)
            </span>
            <span className="col-4">
              <GiCoins />
              tips(<i>net</i>)
            </span>
          </div>
        )}
      </div>
    );
  };
  // ------------------------------------------------------------------

  // ------------------- Calculate the total tips for the week and returning a div to display --------

  const render = (tip, index) => {
    // console.log("tip", tip.TipsGross, "index", index)
    const prevDaysIndex = index - 1;
    const prevDaysTips = tip.TipsGross;
    // console.log("prevDaysIndex", prevDaysIndex, "prevDaysTips", prevDaysTips);

    if (tip) {
      for (let i = 0; i < newTipsArr.length; i++) {
        if (newTipsArr[i].date === tip.date) {
          const day6 = newTipsArr[i - 6]
            ? parseInt(newTipsArr[i - 6].TipsNet)
            : 0;
          const day5 = newTipsArr[i - 5]
            ? parseInt(newTipsArr[i - 5].TipsNet)
            : 0;
          const day4 = newTipsArr[i - 4]
            ? parseInt(newTipsArr[i - 4].TipsNet)
            : 0;
          const day3 = newTipsArr[i - 3]
            ? parseInt(newTipsArr[i - 3].TipsNet)
            : 0;
          const day2 = newTipsArr[i - 2]
            ? parseInt(newTipsArr[i - 2].TipsNet)
            : 0;
          const day1 = newTipsArr[i - 1]
            ? parseInt(newTipsArr[i - 1].TipsNet)
            : 0;
          const dayDay = parseInt(newTipsArr[i].TipsNet);

          const dayBrut6 = newTipsArr[i - 6]
            ? parseInt(newTipsArr[i - 6].TipsGross)
            : 0;
          const dayBrut5 = newTipsArr[i - 5]
            ? parseInt(newTipsArr[i - 5].TipsGross)
            : 0;
          const dayBrut4 = newTipsArr[i - 4]
            ? parseInt(newTipsArr[i - 4].TipsGross)
            : 0;
          const dayBrut3 = newTipsArr[i - 3]
            ? parseInt(newTipsArr[i - 3].TipsGross)
            : 0;
          const dayBrut2 = newTipsArr[i - 2]
            ? parseInt(newTipsArr[i - 2].TipsGross)
            : 0;
          const dayBrut1 = newTipsArr[i - 1]
            ? parseInt(newTipsArr[i - 1].TipsGross)
            : 0;
          const dayBrutDay = parseInt(newTipsArr[i].TipsGross);

          weeklyTipsNet = dayDay + day1 + day2 + day3 + day4 + day5 + day6;
          weeklyTipsGross =
            dayBrutDay +
            dayBrut1 +
            dayBrut2 +
            dayBrut3 +
            dayBrut4 +
            dayBrut5 +
            dayBrut6;
        }
      }
    }
    return (
      <div className="row bg-info g-0" style={{ width: " 100%" }}>
        {showDashboardMediaView === false ? (
          <>
            <div className="col-2 font-weight">weekly total:</div>
            <div className="col-6"></div>
            <div className="col-2">{weeklyTipsGross}</div>
            <div className="col-2">{weeklyTipsNet}</div>
          </>
        ) : (
          <>
            <div className="col-4 font-weight">weekly total: </div>
            <div className="col-4">{weeklyTipsGross}</div>
            <div className="col-4">{weeklyTipsNet}</div>
          </>
        )}
      </div>
    );
  };
  // ------------------------------------------------------------------

  return (
    <div className="wild">
      <div className="you g-0 m-0 p-0">{renderTitles()}</div>
      <div className="dashboard-alignment py-2">
        {displayTips && // slice(): Creates a shallow copy of the displayTips array, ensuring we don't modify the original array.
          displayTips
            .slice()
            .reverse()
            .map((tip, index) => (
              <div className="row g-0" key={`${tip.date}-${index}`} tip={tip}>
                {showDashboardMediaView === false && (
                  <>
                    <span className="col-lg-2 col-sm-0">
                      {(() => {
                        const [month, day, year] = tip.date.split("/"); // Extract month, day, year

                        // Create a Date object using local time
                        const correctedDate = new Date(
                          year,
                          parseInt(month, 10) - 1,
                          day
                        );

                        // Return the full month name
                        const monthName = correctedDate.toLocaleDateString(
                          "en-US",
                          { month: "long" }
                        );

                        return monthName;
                      })()}
                    </span>
                    <span className="col-3">{tip.dayName}</span>
                    <span className="col-3">{tip.date}</span>
                    <span className="col-2">{tip.TipsGross}</span>
                    <span className="col-2">{tip.TipsNet}</span>
                    {tip.dayName === "Sunday" ? ( // we add the column's titles line after each Sunday
                      <div className="row g-0">
                        <span className="col-12 bg-info">
                          {newTipsArr ? <>{render(tip, index)}</> : null}
                        </span>
                        {renderTitles()}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                )}
                {showDashboardMediaView === true && (
                  <>
                    <span className="col-4">{tip.date}</span>
                    <span className="col-4">{tip.TipsGross}</span>
                    <span className="col-4">{tip.TipsNet}</span>
                    {tip.dayName === "Sunday" ? (
                      <div className="row g-0">
                        <span className="col-12 bg-info">
                          {newTipsArr ? <>{render(tip, index)}</> : null}
                        </span>
                        {renderTitles()}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default CardBodyDashboard;
