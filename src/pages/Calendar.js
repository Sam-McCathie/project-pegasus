import React from "react";
import CalendarNode from "../components/Calendar/CalendarNode";
import {Layout} from "../components/Layout/Layout";
import "../styles/calendar.scss";
import {days} from "./days";
import {NodeData} from "../components/Calendar/NodeData";

export const Calendar = () => {
  const data = NodeData(1, 12, 2022);
  console.log(data.dates);

  // add styles
  // - if month !== to current month apply style

  return (
    <Layout title={"Calendar"}>
      <div className="calendar">
        <div className="calendar__month">{`${data.m} ${data.y}`}</div>
        <div className="calendar__DOW">
          {days.map((d) => {
            return <div className="calendar__day">{d}</div>;
          })}
        </div>
        <div className="calendar__layout">
          <div className="calendar__nodes">
            {data.dates.map((d) => {
              return (
                <CalendarNode
                  id={d.id}
                  date={d.date}
                  bg={d.month === data.m ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
