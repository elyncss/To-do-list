const addTask = document.querySelector(".add-btn");
const task = document.querySelector("#to-do-input");
const listBox = document.querySelector("ul");
const taskBox = document.querySelector(".tasks");
const xbtn = document.querySelector(".input-icon");

let taskArr = [];

addTask.addEventListener("click", () => {
  const newList = document.createElement("li");
  
  const newImg = document.createElement("img");
  newImg.src = "/icons/deleteicon1.svg";
  newImg.classList.add("list-icon");
  taskBox.style.display = "block";
  taskArr.push(task.value);

  for(let i = 0; i < taskArr.length; i++) {
    newList.textContent = taskArr[i];
  }
  
  listBox.append(newList);
  newList.append(newImg);
  localStorage.setItem("elxan", JSON.stringify(taskArr));
  let data = JSON.parse(localStorage.getItem("elxan"));

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
