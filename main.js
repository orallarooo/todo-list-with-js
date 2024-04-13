const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById("btn");

btn.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let myTask = document.createElement("li");
    myTask.innerHTML = inputBox.value;
    listContainer.appendChild(myTask);
    let spanItem = document.createElement("span");
    spanItem.innerHTML = "\u00d7";
    myTask.appendChild(spanItem);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask()
