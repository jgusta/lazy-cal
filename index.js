import { compileFile } from "pug";

const data = {
  daysOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],

  firstDay: 2,
  lastDay: 31,

  monthName: "June",
  year: 2021
};

// Compile the source code
const ass = compileFile("src/template.pug");

document.getElementById("app").innerHTML = ass(data);
