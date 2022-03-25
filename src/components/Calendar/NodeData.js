import React from "react";

export const NodeData = () => {
  // testing array creation
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date(); // current date
  const D = {m: d.getMonth(), y: d.getFullYear()};
  const daysInMonth = new Date(D.y, D.m + 1, 0).getDate(); // m -> 0 indexed?
  const monthArr = [...Array(daysInMonth).keys()].map((i) => i + 1);

  const firstDay = new Date(D.y, D.m, 1);
  const first = days[firstDay.getDay()];
  const i = days.indexOf(first);
  const previous = new Date(D.y, D.m, 0).getDate(); // m -> 0 indexed?
  // extract the last i amount of days in prev month
  //   -- review daysInMonth method

  console.log(previous);

  console.log(monthArr);

  // function getFirstDayOfMonth(year, month) {
  //   return new Date(year, month, 1);
  // }

  // const firstDayCurrentMonth = getFirstDayOfMonth(
  //   d.getFullYear(),
  //   d.getMonth()
  // );

  // const firstDayDOW = days[firstDayCurrentMonth.getDay()];
  // console.log(firstDayDOW);

  return <div>NodeData</div>;
};

// get current month
// get start date for current month
// get days of month
// create an array the length of the month with each day
// add days from previous month based one where start day is.
// - e.g. of start day = tuesday + 1 of last month.
// repeat for end of the month

// save day id as 250322 or 011023 etc or split up into D/M/Y db cols

// create an array base on result
// if month starts on a Wednesday grab last two days of previous month as array.
// - add update a class to indicicate past or next month for colour changes
