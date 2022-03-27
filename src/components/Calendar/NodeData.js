// Notes
// - add a handler / test jan & dec current dates
// testing array creation
export const NodeData = (dd, mm, yyyy) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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

  // todays date
  // const d = new Date();
  const d = new Date(yyyy, mm, dd);
  // console.log(d);

  // month
  const m = months[d.getMonth()];
  // console.log(m);

  // todays month & year
  const D = {m: d.getMonth() + 1, y: d.getFullYear()};
  // console.log(D);

  // days in current month
  const daysInMonth = new Date(D.y, D.m, 0).getDate(); // m -> 0 indexed?
  // console.log(daysInMonth);

  // format day data
  const createDateNode = (date, month, year, type) => {
    const dID = date >= 10 ? date : `0${date}`;

    const m = month > 0 ? month : 12;
    const M = months[m - 1];
    const mID = m.length >= 10 ? m : `0${m}`;

    const y = type === "current" ? year : m !== 12 ? year : year - 1;

    const data = {
      id: dID + mID + y,
      date: date,
      month: M,
      year: y,
    };
    return data;
  };

  // array of days in current month
  const currentMonthDays = [...Array(daysInMonth).keys()].map((i) => {
    return createDateNode(i + 1, D.m, D.y, "current");
  });
  // console.log(currentMonthDays);

  // get first day of current month
  const firstDay = new Date(D.y, D.m - 1, 1);
  // console.log(firstDay);

  // get DOW of the first day of current month
  const first = days[firstDay.getDay()];
  // console.log(first);

  // get DOW index of first day in current month
  const iF = days.indexOf(first) - 1;
  // console.log(iF);

  // get length of previous month
  const previous = new Date(D.y + 1, D.m - 1, 0).getDate();
  // console.log(previous);

  // create an array of the extra days to round out the current month
  let previousMonthDays = [];
  if (iF > 0) {
    for (let x = previous - iF; x < previous; x++) {
      previousMonthDays.push(createDateNode(x + 1, D.m - 1, D.y, "previous"));
    }
  } else if (iF === -1) {
    //
    for (let x = previous - 6; x < previous; x++) {
      previousMonthDays.push(createDateNode(x + 1, D.m - 1, D.y, "previous"));
    }
  }
  // console.log(previousMonthDays);

  // get last day of current month
  const lastDay = new Date(D.y, D.m, 0);
  // console.log(lastDay);

  // get DOW of the last day of current month
  const last = days[lastDay.getDay()];
  // console.log(last);

  // get DOW index of last day of current month
  const iL = days.indexOf(last);
  // console.log(iL);

  // create an array of the extra days to round out the current month
  let nextMonthDays = [];
  if (iL <= days.length - 1) {
    for (let x = 1; x <= days.length - iL; x++) {
      // console.log(x);
      // console.log(days.length - iL);
      nextMonthDays.push(
        createDateNode(
          x,
          D.m !== 12 ? D.m + 1 : 1,
          D.m !== 12 ? D.y : D.y + 1,
          "next"
        )
      );
    }
  }
  // console.log(nextMonthDays);

  // current full array including extra days before & after current month
  let currentMonthDates = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ];

  const currentMonth = {
    m: m,
    y: D.y,
    dates: currentMonthDates,
  };

  return currentMonth;
};
