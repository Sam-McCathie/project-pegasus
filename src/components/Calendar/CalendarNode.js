import React from "react";
import "./CalendarNode.scss";
import Event from "../../svgs/Event.svg";
import Deadline from "../../svgs/Deadline.svg";
import List from "../../svgs/List.svg";
import Task from "../../svgs/Task.svg";
import {NodeData} from "./NodeData";

const CalendarNode = () => {
  console.log(NodeData);

  return (
    <div className="calendar__node">
      <div className="calendar__node__day">31</div>
      <div className="calendar__node__icons">
        <div>
          <img className="calendar__node__icon" src={Event} alt="Event" />
        </div>
        <div>
          <img className="calendar__node__icon" src={Deadline} alt="Deadline" />
        </div>
        <div>
          <img className="calendar__node__icon" src={List} alt="List" />
        </div>
        <div>
          <img className="calendar__node__icon" src={Task} alt="Task" />
        </div>
      </div>
      <div className="calendar__node__icon__values">
        <span className="calendar__node__icon__value">99+</span>
        <span className="calendar__node__icon__value">99+</span>
        <span className="calendar__node__icon__value">99+</span>
        <span className="calendar__node__icon__value">99+</span>
      </div>
    </div>
  );
};

export default CalendarNode;
