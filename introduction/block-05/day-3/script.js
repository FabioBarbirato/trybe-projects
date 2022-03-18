function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
createDaysOfTheWeek();

let listNorOrder = document.getElementById("days");
// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createDaysOfMOnth() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const daysOfMonth = dezDaysList[i];
    const liCreate = document.createElement("li");
    liCreate.classList.add("day");
    if (
      dezDaysList[i] === 24 ||
      dezDaysList[i] === 25 ||
      dezDaysList[i] === 31
    ) {
      liCreate.classList.add("holiday");
    }
    if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18 ||
      dezDaysList[i] === 25
    ) {
      liCreate.classList.add("friday");
    }
    liCreate.innerHTML = daysOfMonth;
    listNorOrder.appendChild(liCreate);
  }
}
createDaysOfMOnth();

function btnHolidays(Feriados) {
  let divBtn = document.querySelector(".buttons-container");
  let btn = document.createElement("button");
  btn.innerHTML = Feriados;
  btn.id = "btn-holiday";
  divBtn.appendChild(btn);
}
btnHolidays("Feriados");
function clickHoliday() {
  let clickButton = document.getElementById("btn-holiday");
  clickButton.addEventListener("click", changeColor);
}
const standardColor = "rgb(238,238,238)";
const newColorChanges = "blue";
function changeColor() {
  let holidayCalendar = document.getElementsByClassName("holiday");
  for (let i = 0; i < holidayCalendar.length; i += 1) {
    if (holidayCalendar[i].style.backgroundColor === newColorChanges) {
      holidayCalendar[i].style.backgroundColor = standardColor;
    } else {
      holidayCalendar[i].style.backgroundColor = newColorChanges;
    }
  }
}
clickHoliday();

function fridayButton() {
  let divBtn = document.querySelector(".buttons-container");
  let btnFriday = document.createElement("button");
  btnFriday.innerHTML = "Sexta-Feira";
  btnFriday.id = "btn-friday";
  divBtn.appendChild(btnFriday);
}
fridayButton();

//criação do array com os dias da sexta feira
let fridayDays = [];
const fridays = document.getElementsByClassName("friday");
for (let index in fridays) {
  fridayDays.push(fridays[index].textContent);
}

function changeFridays() {
  let textAlter = document.getElementById("btn-friday");
  textAlter.addEventListener("click", changeTextFriday);
}
function changeTextFriday() {
  const fridayCalendar = document.getElementsByClassName("friday");
  for (let i = 0; i < fridayCalendar.length; i += 1) {
    if (fridayCalendar[i].innerHTML === "Sextou!") {
      fridayCalendar[i].innerHTML = fridayDays[i];
    } else {
      fridayCalendar[i].innerHTML = "Sextou!";
    }
  }
}
changeFridays();

//mudança no tamanho da fonte, ao passar o mouse em cima
const daysCapture = document.getElementsByClassName("day");
for (let i = 0; i < daysCapture.length; i += 1) {
  daysCapture[i].addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
  })
}
for (let i = 0; i < daysCapture.length; i += 1) {
  daysCapture[i].addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
  })
}
let divSpan = document.querySelector('.my-tasks');
//criação tag span
function tagSpan(task) {
  
  let spanCreate = document.createElement('span');
  spanCreate.innerText = task
  divSpan.appendChild(spanCreate);
}
tagSpan("Cozinhar, Revisar exercícios");

function colorTask(cor) {
  let divColor = document.createElement('div');
  divColor.classList.add('task');
  divColor.style.backgroundColor = cor;
  divSpan.appendChild(divColor);
}
colorTask('orange');
