const btn = document.querySelector(".btn");
const date = document.querySelector(".date");
const year = document.querySelector(".yearValue");
const month = document.querySelector(".monthValue");
const days = document.querySelector(".daysValue");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (date.value === "") {
    alert("You Need to fill the date first");
  }
  const dob = new Date(date.value);
  const currentDate = new Date();

  //All values
  const currentDay = currentDate.getDate();
  const dobDay = dob.getDate();
  const currentMonth = currentDate.getMonth();
  const dobMonth = dob.getMonth();
  const currentYear = currentDate.getFullYear();
  const dobYear = dob.getFullYear();

  if (
    currentYear < dobYear ||
    (currentYear === dobYear && currentMonth < dobMonth) ||
    (currentYear === dobYear &&
      currentMonth === dobMonth &&
      currentDay < dobDay)
  )
    alert("Inavlid Input");
  else {
    //final values variable
    let ageYear = currentYear - dobYear;
    let ageMonth = 0;
    let ageDays = 0;

    //ageMonth
    if (
      currentMonth < dobMonth ||
      (currentMonth === dobYear && currentDay < dobDay)
    ) {
      if (currentYear !== dobYear) ageYear--;
      ageMonth = 12 - dobMonth + currentMonth;
    } else ageMonth = currentMonth - dobMonth;

    //ageDays
    //new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    if (currentDay < dobDay) {
      const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
      console.log(prevMonthLastDay);
      ageDays = prevMonthLastDay - dobDay + currentDay;
    } else {
      ageDays = ageMonth * (currentDay - dobDay);
    }

    year.innerHTML = ageYear;
    month.innerHTML = ageMonth;
    days.innerHTML = ageDays;
  }
});