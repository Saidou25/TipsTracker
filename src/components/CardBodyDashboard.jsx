import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { auth } from "../firebase";
import { FaSackDollar } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { titlesData } from "../data";

import "./Card.css";

const CardBodyDashboard = ({ cardBodyTemplate }) => {
  const tips = cardBodyTemplate.tips;
  
  const [newTipsArr, setNewTipsArr] = useState(tips);

  const titles = titlesData[0].titles;
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
  const monthTitle = months[new Date().getMonth()];

  const display = useCallback((newArrTips) => {
    setNewTipsArr(newArrTips);
  }, []);

  useEffect(() => {
    let newArrTips = [];
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // month is zero-based
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const getDatesBetween = (startDate, endDate) => {

      let dates = [];
      let currentDate = new Date(startDate);

      while (currentDate <= new Date(endDate)) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    };

    if (cardBodyTemplate) {

      if (tips) {
        let startDate;
        let endDate;

        for (let i = 0; i < tips.length; i++) {
          var len = tips.length;
          const current = tips[i].date.split("/")[1];
          // const previous = tips[(i + len - 1) % len].date.split("/")[1];
          const next = tips[(i + 1) % len].date.split("/")[1];

          startDate = tips[i].date;
          endDate = tips[(i + 1) % len].date;

          if (next - current > 1) {
            let dateArray = getDatesBetween(startDate, endDate);

            // Format dates to MM/DD/YYYY
            dateArray = dateArray.map((date) => {
              let day = String(date.getDate()).padStart(2, "0");
              let month = String(date.getMonth() + 1).padStart(2, "0");
              let year = date.getFullYear();
              return `${month}/${day}/${year}`;
            });
        
            dateArray.pop();
            dateArray.shift();

            newArrTips.push({
              dayName: tips[i].dayName,
              date: !tips[i].date ? 0 : tips[i].date,
              TipsBrut: tips[i].TipsBrut,
              TipsNet: tips[i].TipsNet,
            });

            for (let dateA of dateArray) {
              let date = new Date(`${dateA}`);
              let day = date.toLocaleString("en-us", { weekday: "long" });

              newArrTips.push({
                dayName: day,
                date: dateA,
                TipsBrut: 0,
                TipsNet: 0,
              });
            }
          }
          if (next - current === 1) {
            newArrTips.push(tips[i]);
          }
          if (i === len - 1) {
            newArrTips.push(tips[i]);
          }
        }
      }

      display(newArrTips);
    }
  }, [cardBodyTemplate, display, tips]);

 let weeklyTipsNet;
 let weeklyTipsBrut;

  const render = (tip) => {
    if (tip) {
   
      for (let i = 0; i < newTipsArr.length; i++) {
   
        if (newTipsArr[i].date === tip.date) {
       
          const day6 = newTipsArr[i - 6] ? parseInt(newTipsArr[i - 6].TipsNet) : 0;
          const day5 = newTipsArr[i - 5] ? parseInt(newTipsArr[i - 5].TipsNet) : 0;
          const day4 = newTipsArr[i - 4] ? parseInt(newTipsArr[i - 4].TipsNet) : 0;
          const day3 = newTipsArr[i - 3] ? parseInt(newTipsArr[i - 3].TipsNet) : 0;
          const day2 = newTipsArr[i - 2] ? parseInt(newTipsArr[i - 2].TipsNet) : 0;
          const day1 = newTipsArr[i - 1] ? parseInt(newTipsArr[i - 1].TipsNet) : 0;
          const dayDay = parseInt(newTipsArr[i].TipsNet);

          const dayBrut6 = newTipsArr[i - 6] ? parseInt(newTipsArr[i - 6].TipsBrut) : 0;
          const dayBrut5 = newTipsArr[i - 5] ? parseInt(newTipsArr[i - 5].TipsBrut) : 0;
          const dayBrut4 = newTipsArr[i - 4] ? parseInt(newTipsArr[i - 4].TipsBrut) : 0;
          const dayBrut3 = newTipsArr[i - 3] ? parseInt(newTipsArr[i - 3].TipsBrut) : 0;
          const dayBrut2 = newTipsArr[i - 2] ? parseInt(newTipsArr[i - 2].TipsBrut) : 0;
          const dayBrut1 = newTipsArr[i - 1] ? parseInt(newTipsArr[i - 1].TipsBrut) : 0;
          const dayBrutDay = parseInt(newTipsArr[i].TipsBrut);

           weeklyTipsNet = (dayDay + day1 + day2 + day3 + day4 + day5 + day6)
           weeklyTipsBrut = (dayBrutDay + dayBrut1 + dayBrut2 + dayBrut3 + dayBrut4 + dayBrut5 + dayBrut6)
        }
      }
    }
    return (
      <div className="row bg-info g-0" style={{ width: " 100%" }}>
      <div className="col-3">weekly total: </div>
      <div className="col-3"></div>
      <div className="col-3">{weeklyTipsBrut}</div>
      <div className="col-3">{weeklyTipsNet}</div>
      </div>
    )
  }
  return (
    <>
      <h5
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {monthTitle}
      </h5>
      <br />
      <div className="you g-0 m-0 p-0">
        <div className="here">
          <div className="row bg-secondary g-0">
            {titles &&
              titles.map((title) => (
                <div className="col-3" key={title}>
                  {title === "tips(brut)" && <>
                    <FaSackDollar />tips(brut)</>} 
                  {title === "tips(net)" && <><GiCoins />tips(net)</>} 
                  {title === "week day" && <>week day</>}
                  {title === "date" && <>date</>}
                </div>
              ))}
          </div>
        </div>
        <div className="here">
          <div className="py-2">
            {newTipsArr &&
              newTipsArr.map((tip, index) => (
                <div className="row g-0" key={tip.date}>
                  <span className="col-3">{tip.dayName}</span>
                  <span className="col-3">{tip.date}</span>
                  <span className="col-3">{tip.TipsBrut}</span>
                  <span className="col-3">{tip.TipsNet}</span>

                  {tip.dayName === "Sunday" ? (
                    <>
                      <div className="row g-0">
                        <span className="col-12 bg-info">
                          {newTipsArr ? <>{render(tip)}</> : null}
                        </span>
                      </div>
                      <div className="here">
                        <div className="row bg-secondary mt-2">
                          {titles &&
                            titles.map((title) => (
                              <div className="col-3" key={title}>
                                 {title === "tips(brut)" && <>
                                 <FaSackDollar />tips(brut)</>} 
                                 {title === "tips(net)" && <><GiCoins />tips(net)</>} 
                                 {title === "week day" && <>week day</>}
                                 {title === "date" && <>date</>}
                              </div>
                            ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

CardBodyDashboard.propTypes = {
  dayName: PropTypes.string,
  date: PropTypes.string,
  TipsBrut: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  TipsNet: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CardBodyDashboard;
