import React from "react";

// Notes
// - add a handler / test jan & dec current dates

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

  // todays date
  const d = new Date();
  console.log(d);

  // todays month & year
  const D = {m: d.getMonth() + 1, y: d.getFullYear()};
  console.log(D);

  // days in current month
  const daysInMonth = new Date(D.y, D.m, 0).getDate(); // m -> 0 indexed?
  console.log(daysInMonth);

  // format day data
  // - add to object identifyer if month is current? -> will help with CCS later
  const createDate = (date, month, year) => {
    const d = (date + 1).toString();
    const dID = d.length > 1 ? date : `0${date}`;

    const m = month.toString();
    const mID = m.length > 1 ? m : `0${m}`;

    const data = {
      id: dID + mID + year,
      date: date,
      month: month,
      year: year,
    };
    return data;
  };

  // array of days in current month
  const currentMonthDays = [...Array(daysInMonth).keys()].map((i) => {
    return createDate(i + 1, D.m, D.y);
  });

  // get first day of current month
  const firstDay = new Date(D.y, D.m - 1, 1);
  console.log(firstDay);

  // get DOW of the first day of current month
  const first = days[firstDay.getDay()];
  console.log(first);

  // get DOW index of first day in current month
  const iF = days.indexOf(first) - 1;
  console.log(iF);

  // get length of previous month
  const previous = new Date(D.y, D.m - 1, 0).getDate();
  console.log(previous);

  // create an array of the extra days to round out the current month
  let previousMonthDays = [];
  if (iF > 0) {
    for (let x = 0; x < iF; x++) {
      previousMonthDays.push(createDate(previous - x, D.m - 1, D.y));
    }
  }
  console.log(previousMonthDays);

  // get last day of current month
  const lastDay = new Date(D.y, D.m, 0);
  console.log(lastDay);

  // get DOW of the last day of current month
  const last = days[lastDay.getDay()];
  console.log(last);

  // get DOW index of last day of current month
  const iL = days.indexOf(last);
  console.log(iL);

  // create an array of the extra days to round out the current month
  let nextMonthDays = [];
  if (iL < days.length - 1) {
    for (let x = 1; x <= days.length - iL; x++) {
      nextMonthDays.push(createDate(x, D.m + 1, D.y));
    }
  }
  console.log(nextMonthDays);

  // current full array including extra days before current month
  let currentMonth = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ];
  console.log(currentMonth);

  return <div>NodeData</div>;
};
