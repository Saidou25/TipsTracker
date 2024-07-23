import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { auth } from "../firebase";
// import { FaSackDollar } from "react-icons/fa6";
// import { GiCoins } from "react-icons/gi";
import { titlesData } from "../data";

import "./Card.css";

const CardBodyDashboard = ({ cardBodyTemplate }) => {
  const [newTipsArr, setNewTipsArr] = useState("");

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
    console.log(newArrTips);
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

    // const todaysDate = mm + "/" + dd + "/" + yyyy;

    const getDatesBetween = (startDate, endDate) => {
      console.log("start date", startDate);
      console.log("end date", endDate);

      let dates = [];
      let currentDate = new Date(startDate);

      while (currentDate <= new Date(endDate)) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    };

    if (cardBodyTemplate) {
      const tips = cardBodyTemplate.tips;
      // console.log(tips.sort())

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
         
          if (current === tips[0].date.split("/")[1]) {
            newArrTips.push(tips[0]);
          }

          if (next - current > 1) {

            let dateArray = getDatesBetween(startDate, endDate);

            // Format dates to MM/DD/YYYY
            dateArray = dateArray.map((date) => {
              let day = String(date.getDate()).padStart(2, "0");
              let month = String(date.getMonth() + 1).padStart(2, "0");
              let year = date.getFullYear();
              return `${month}/${day}/${year}`;
            });
            console.log(dateArray);
            dateArray.pop();

            for (let dateA of dateArray) {

              let date = new Date(`${dateA}`);
              let day = date.toLocaleString("en-us", { weekday: "long" });
              console.log(day);

              if (dateA !== tips[0].date) {
                newArrTips.push({
                  dayName: day,
                  date: dateA,
                  TipsBrut: 0,
                  TipsNet: 0,
                });
              }
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
  }, [cardBodyTemplate, display]);

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
          <div className="row">
            {titles &&
              titles.map((title) => (
                <div className="col-3" key={title}>
                  <span>{title}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="here">
          <div className="py-2">
            {newTipsArr &&
              newTipsArr.map((tip) => (
                <div className="row" key={tip.date}>
                  <span className="col-3">{tip.dayName}</span>
                  <span className="col-3">{tip.date}</span>
                  <span className="col-3">{tip.TipsBrut}</span>
                  <span className="col-3">{tip.TipsNet}</span>
                  {tip.dayName === "Sunday" ? (
                    <>
                      <div className="row">
                        <span className="col-12 bg-danger">
                          Total: {tip.TipsNet}
                        </span>
                      </div>
                      <div className="here">
                        <div className="row bg-danger">
                          {titles &&
                            titles.map((title) => (
                              <div className="col-3" key={title}>
                                <span>{title}</span>
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
