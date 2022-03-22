import React from "react";
import CalendarNode from "../components/Calendar/CalendarNode";
import {Layout} from "../components/Layout/Layout";
import "../styles/calendar.scss";
import {days} from "./days";

// date
// days
// calendar

export const Calendar = () => {
  console.log(days);

  return (
    <Layout title={"Calendar"}>
      <div className="calendar">
        <div className="calendar__month">March 2022</div>
        {/* Conditionally render DOW -> hide if width doesn't allow all rows to show */}
        <div className="calendar__DOW">
          {days.map((d) => {
            return <div className="calendar__day">{d}</div>;
          })}
        </div>
        {/* use for alignment */}
        <div className="calendar__layout">
          <div className="calendar__nodes">
            <CalendarNode />
          </div>
        </div>
      </div>
    </Layout>
  );
};
