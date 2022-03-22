// testing array creation
const d = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1);
}

const firstDayCurrentMonth = getFirstDayOfMonth(d.getFullYear(), d.getMonth());
const firstDayDOW = days[firstDayCurrentMonth.getDay()];

let Nodes;
switch (firstDayDOW) {
  case "Monday":
    Nodes = "M";
    break;
  case "Tuesday":
    Nodes = "T";
    break;
  case "Wednesday":
    Nodes = "W";
    break;
  case "Thursday":
    Nodes = "Th";
    break;
  case "Friday":
    Nodes = "F";
    break;
  case "Saturday":
    Nodes = "S";
    break;
  case "Sunday":
    Nodes = "Sun";
    break;
  default:
    Nodes = `oh no... ${firstDayDOW}`;
    break;
}
// create an array base on result
// if month starts on a Wednesday grab last two days of previous month as array.
// - add update a class to indicicate past or next month for colour changes

export const NodeData = [Nodes];
