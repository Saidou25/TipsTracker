import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { monthTipsArray } from "../inBetween";

import "./Card.css";

const CardBodyDashboard = ({ cardBodyTemplate }) => {
  const newTipsArr = cardBodyTemplate.tips;
  const displayTips = monthTipsArray(newTipsArr);
// console.log(displayTips)
  // ______________________________code for adding tips and display a weekly total tips___________________________
  let weeklyTipsNet;
  let weeklyTipsBrut;

  const renderTitles = () => {
    return (
      <div className="here">
        <div className="row bg-secondary g-0">
          <span className="col-2">month</span>
          <span className="col-3">week day</span>
          <span className="col-3">date</span>
          <span className="col-2">
            <FaSackDollar />
            tips(brut)
          </span>
          <span className="col-2">
            <GiCoins />
            tips(net)
          </span>
        </div>
      </div>
    );
  };
  const render = (tip) => {
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
            ? parseInt(newTipsArr[i - 6].TipsBrut)
            : 0;
          const dayBrut5 = newTipsArr[i - 5]
            ? parseInt(newTipsArr[i - 5].TipsBrut)
            : 0;
          const dayBrut4 = newTipsArr[i - 4]
            ? parseInt(newTipsArr[i - 4].TipsBrut)
            : 0;
          const dayBrut3 = newTipsArr[i - 3]
            ? parseInt(newTipsArr[i - 3].TipsBrut)
            : 0;
          const dayBrut2 = newTipsArr[i - 2]
            ? parseInt(newTipsArr[i - 2].TipsBrut)
            : 0;
          const dayBrut1 = newTipsArr[i - 1]
            ? parseInt(newTipsArr[i - 1].TipsBrut)
            : 0;
          const dayBrutDay = parseInt(newTipsArr[i].TipsBrut);

          weeklyTipsNet = dayDay + day1 + day2 + day3 + day4 + day5 + day6;
          weeklyTipsBrut =
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
        <div className="col-2"></div>
        <div className="col-3"></div>
        <div className="col-3">weekly total: </div>
        <div className="col-2">{weeklyTipsBrut}</div>
        <div className="col-2">{weeklyTipsNet}</div>
      </div>
    );
  };
  return (
    <>
      <div className="you g-0 m-0 p-0">{renderTitles()}</div>

      <div className="here">
        <div className="py-2">
          {displayTips &&
            displayTips.map((tip, index) => (
              <div className="row g-0" key={`${tip.date}-${index}`} tip={tip}>
                <span className="col-2">
                  {(() => {
                    const [month, day, year] = tip.date.split("/"); // Extract month, day, year

                    // Create a correct Date object using local time
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
                <span className="col-2">{tip.TipsBrut}</span>
                <span className="col-2">{tip.TipsNet}</span>

                {tip.dayName === "Sunday" ? (
                  <>
                    <div className="row g-0">
                      <span className="col-12 bg-info">
                        {newTipsArr ? <>{render(tip)}</> : null}
                      </span>
                    </div>
                    {renderTitles()}
                  </>
                ) : (
                  <></>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CardBodyDashboard;
