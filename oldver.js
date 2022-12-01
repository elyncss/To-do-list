const addTask = document.querySelector(".add-btn");
const task = document.querySelector("#to-do-input");
const listBox = document.querySelector("ul");
const taskBox = document.querySelector(".tasks");
const xbtn = document.querySelector(".input-icon");
const sort = document.querySelector(".icon-arrow");

// localstorag section***************************************
let localStorageGet = localStorage.getItem("taskey");
let taskArr = [];

if (localStorageGet !== null) {
  taskArr = JSON.parse(localStorage.getItem("taskey"));
}

localStorage.setItem("taskey", JSON.stringify(taskArr));
function init() {
  let data = JSON.parse(localStorage.getItem("taskey"));

  // creating elements in localstoreg************************
  if (data.length > 0) {
    data.forEach((element) => {
      const newList = document.createElement("li");
      const newImg = document.createElement("img");
      newImg.src = "/icons/deleteicon1.svg";
      newImg.classList.add("list-icon");
      taskBox.style.display = "block";
      newList.textContent = element;
      listBox.append(newList);
      newList.append(newImg);

      newImg.addEventListener("click", removeTaskFunc);
      function removeTaskFunc() {
        localStorage.remove("taskey");
        taskArr.splice();
        newImg.remove();
        newList.remove();
      }
    });
  }
}

// function removeLocStore(todo) {
//   let todos;
//   if (localStorage.getItem("taskey") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("taskey"));
//   }
//   const taskIndex = todo.children[1].innerText;
//   todos.splice(todos.indexOf(taskIndex), 1);
//   localStorage.setItem("taskey", JSON.stringify("todos"));
// }

init();

// add task btn functions************************************
addTask.addEventListener("click", addTaskFunc);
function addTaskFunc(e) {
  e.preventDefault();

  // li tag aded*********************************************
  const newList = document.createElement("li");
  newList.textContent = task.value;
  listBox.appendChild(newList);
  taskBox.style.display = "block";

  // img icon aded******************************************
  const newImg = document.createElement("img");
  newImg.src = "/icons/deleteicon1.svg";
  newImg.setAttribute("class", "list-icon");
  newList.appendChild(newImg);

  // task value push to array*******************************
  taskArr.push(task.value);
  console.log(taskArr);

  // localstoreg section************************************
  localStorage.setItem("taskey", JSON.stringify(taskArr));
  let data = JSON.parse(localStorage.getItem("taskey"));

  // remove task elements***********************************
  newImg.addEventListener("click", removeTaskFunc);
  function removeTaskFunc() {
    localStorage.removeItem("taskey");
    taskArr.splice();
    newImg.remove();
    newList.remove();
  }
}

console.log(localStorage);
