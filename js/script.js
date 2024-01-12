let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let calendarDate = new Date();
date.innerHTML =
	(calendarDate.getDate() < 10 ? "0" : " ") + calendarDate.getDate();
day.innerHTML = calendarDate.toLocaleDateString("en-EN", { weekday: "long" });
month.innerHTML = calendarDate.toLocaleString("en-EN", { month: "long" });
year.innerHTML = calendarDate.getFullYear();
