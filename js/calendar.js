/* JS TO PRODUCE AN ACCURATE DATE DISPLAY 
(GB FORMAT) */

function currentDate() {
  let newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  document.getElementById("date").innerHTML = day + "." + month + "." + year;
}

currentDate();
