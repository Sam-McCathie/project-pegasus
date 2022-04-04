import React, {useState} from "react";
import CalendarNode from "../components/Calendar/CalendarNode";
import {Layout} from "../components/Layout/Layout";
import "../styles/calendar.scss";
import {days} from "./days";
import {NodeData} from "../components/Calendar/NodeData";
import NodeModal from "../components/Calendar/NodeModal";

export const Calendar = () => {
  const today = new Date();
  const d = today.getDate();
  const m = today.getMonth();
  const y = today.getFullYear();

  const createID = (d, m, y) => {
    const dd = d < 10 ? `0${d}` : d;
    const indexM = m + 1;
    const mm = indexM < 10 ? `0${indexM}` : indexM;
    const id = `${dd + mm + y}`;
    return id;
  };

  const [date, setDate] = useState({
    d: d,
    m: m,
    y: y,
    id: createID(d, m, y),
  });

  const [data, setData] = useState(NodeData(date.d, date.m, date.y));

  const nextM = () => {
    let d = date;
    d.m = d.m + 1;
    setDate(d);
    setData(NodeData(date.d, date.m, date.y));
  };

  const previousM = () => {
    let d = date;
    d.m = d.m - 1;
    setDate(d);
    setData(NodeData(date.d, date.m, date.y));
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <Layout title={"Calendar"}>
      <div className="calendar">
        <div className="calendar__month__align">
          <div>
            <button onClick={previousM}>{"<"}</button>
            <div className="calendar__month">{`${data.m} ${data.y}`}</div>
            <button onClick={nextM}>{">"}</button>
          </div>
        </div>
        <button onClick={() => toggleModal()}>show</button>
        {modal ? <NodeModal toggleModal={toggleModal} /> : null}
        <div className="calendar__DOW">
          {days.map((d) => {
            return (
              <div key={d} className="calendar__day">
                {d}
              </div>
            );
          })}
        </div>
        <div className="calendar__layout">
          <div className="calendar__nodes">
            {data.dates.map((d, i) => {
              return (
                <CalendarNode
                  key={i}
                  date={d.date}
                  bg={d.month === data.m ? true : false}
                  today={d.id === date.id ? true : false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
