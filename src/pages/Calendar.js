import React from "react";
import CalendarNode from "../components/Calendar/CalendarNode";
import {Layout} from "../components/Layout/Layout";
import "../styles/calendar.scss";
import {days} from "./days";
import {NodeData} from "../components/Calendar/NodeData";

export const Calendar = () => {
  console.log(NodeData);

  return (
    <Layout title={"Calendar"}>
      <div className="calendar">
        <div className="calendar__month">Date</div>
        <div className="calendar__DOW">
          {days.map((d) => {
            return <div className="calendar__day">{d}</div>;
          })}
        </div>
        <div className="calendar__layout">
          <div className="calendar__nodes">
            {NodeData.map((d) => {
              return <CalendarNode id={d.id} date={d.date} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
