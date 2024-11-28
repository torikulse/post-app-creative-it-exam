const title = document.getElementById("title");
const description = document.getElementById("description");
const postBtn = document.getElementById("postBtn");

const updateBtn = document.getElementById("updateBtn");
const display = document.getElementById("display");
let editBtn;
let deleteBtn;
let updateIndex = null; //get index by press edit butthon for update in update function

let data = [
  { title: "This is title", description: "This is description" },
  { title: "This is title2", description: "This is description2" },
  { title: "This is title3", description: "This is description3" },
];

function deleteItem(i) {
  data.splice(i, 1);
  display.innerHTML = "";
  displayRender();
}

function displayRender() {
  data.map((e, i) => {
    display.innerHTML += `
            <div class="w-80 border p-4 rounded-lg flex flex-col gap-4">
          <div class="flex flex-col gap-4">
            <h1 class="text-2xl font-bold">${e.title}</h1>
            <p>
            ${e.description}
            </p>
          </div>
          <div class="text-right">
            <button
              onclick="editItem(${i})"
              class="py-2 px-4 bg-blue-600 border text-white rounded-md editBtn"
            >
              Edit
            </button>
            <button
            onclick="playGame()"
              class="py-2 px-4 bg-blue-600 border text-white rounded-md playBtn hidden"
            >
              Play
            </button>
            <button
              onclick="deleteItem(${i})"
              class="py-2 px-4 bg-red-600 border text-white rounded-md deleteBtn"
            >
              Delete
            </button>
          </div>
        </div>
            `;
  });
  console.log(data);
  editBtn = document.querySelectorAll(".editBtn");
  deleteBtn = document.querySelectorAll(".deleteBtn");
  playBtn = document.querySelectorAll(".playBtn");
}
displayRender();

function post() {
  if (title.value !== "" && description.value !== "") {
    data.push({ title: title.value, description: description.value });
    display.innerHTML = "";
    displayRender();
    if (!isNaN(Number(title.value))) {
      editBtn[data.length - 1].classList.add("hidden");
      playBtn[data.length - 1].classList.remove("hidden");
    }
    title.value = "";
    description.value = "";
  } else {
    alert("Fill title and description both");
  }
}
function editItem(i) {
  title.value = data[i].title;
  description.value = data[i].description;
  updateBtn.classList.remove("hidden");
  postBtn.classList.add("hidden");
  display.innerHTML = "";
  displayRender();
  updateIndex = i;
}

function update() {
  if (title.value !== "" && description.value !== "") {
    data[updateIndex] = {
      title: title.value,
      description: description.value,
    };
    display.innerHTML = "";
    updateBtn.classList.add("hidden");
    postBtn.classList.remove("hidden");
    displayRender();
    if (!isNaN(Number(title.value))) {
      editBtn[updateIndex].classList.add("hidden");
      playBtn[updateIndex].classList.remove("hidden");
    }
    title.value = "";
    description.value = "";
  } else {
    alert("Fill title and description both");
  }
}

function playGame() {
  alert("Game playing");
}
