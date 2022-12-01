const addTask = document.querySelector(".add-btn");
const task = document.querySelector("#to-do-input");
const listBox = document.querySelector("ul");
const taskBox = document.querySelector(".tasks");
const xbtn = document.querySelector(".input-icon");
const sort = document.querySelector(".icon-arrow");

let localStorageGet = localStorage.getItem("elxan");

let taskArr = [];

// if (localStorageGet != null) {
//   taskArr = JSON.parse(localStorageGet);  *******************************!
// }

localStorage.setItem("elxan", JSON.stringify(taskArr));

let init = function () {
  let data = JSON.parse(localStorage.getItem("elxan"));

  console.log(data);
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
    });
  }
};

init();
addTask.addEventListener("click", (e) => {
  e.preventDefault();
  const newList = document.createElement("li");
  const newImg = document.createElement("img");
  newImg.src = "/icons/deleteicon1.svg";
  newImg.classList.add("list-icon");
  taskBox.style.display = "block";
  taskArr.push(task.value);

  listBox.append(newList);
  newList.append(newImg);

  localStorage.setItem("elxan", JSON.stringify(taskArr));

  let data = JSON.parse(localStorage.getItem("elxan"));

  data.forEach((element) => {
    newList.textContent = element;
  });
  newImg.addEventListener("click", () => {
    if (taskArr.length < 2) {
      taskBox.style.display = "none";
    }

    taskArr.shift();
    data.shift();
    newList.remove();
    newImg.remove();
  });
  console.log(data);
});

xbtn.addEventListener("click", () => {
  task.value = "";
});

// sort icon **********************************************

sort.addEventListener("mouseover", () => {
  sort.src = "icons/down2.svg";
});

sort.addEventListener("mouseleave", () => {
  sort.src = "icons/down1.svg";
});

sort.addEventListener("click", () => {
  taskArr.sort();
  sort.src = "icons/up2.svg";

  sort.addEventListener("mouseleave", () => {
    sort.src = "icons/up1.svg";
  });

  sort.addEventListener("mouseover", () => {
    sort.src = "icons/up2.svg";
  });
});

//=========================================
//=========================================
//=========================================
//=========================================
