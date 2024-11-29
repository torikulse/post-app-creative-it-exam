const title = document.getElementById("title");
const description = document.getElementById("description");
const postBtn = document.getElementById("postBtn");
const updateBtn = document.getElementById("updateBtn");
const display = document.getElementById("display");

let updateIndex = null; //get index by press edit butthon for update in update function

let data = [
  {
    id: 1732876739046,
    type: "post",
    title: "This is title",
    description: "This is description",
  },
  {
    id: 1732876764862,
    type: "post",
    title: "This is title2",
    description: "This is description2",
  },
  {
    id: 1732876777358,
    type: "game",
    title: 99999,
    description: 9999999,
  },
  {
    id: 1732876794021,
    type: "post",
    title: "This is title3",
    description: "This is description3",
  },
];

function deleteItem(i) {
  data.splice(i, 1);

  displayRender();
}

function displayRender() {
  display.innerHTML = "";
  data.reverse().map((e, i) => {
    display.innerHTML += `
            <div class="border p-4 rounded-lg flex flex-col gap-4">
          <div class="flex flex-col gap-4">
            <h1 class="text-2xl font-bold">${e.title}</h1>
            <p>
            ${e.description}
            </p>
          </div>
          <div class="text-right">
            ${
              e.type == "post"
                ? `<button
                onclick="editItem(${i})"
                class="py-2 px-4 bg-blue-600 border text-white rounded-md"
              >
                Edit
              </button>`
                : ""
            }
            ${
              e.type == "game"
                ? `<button onclick="playGame()" class="py-2 px-4 bg-blue-600 border text-white rounded-md">Play</button>`
                : ""
            }
            <button
              onclick="deleteItem(${i})"
              class="py-2 px-4 bg-red-600 border text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
            `;
  });

  title.value = "";
  description.value = "";

  //check data array list
  console.log(data.reverse());
}
displayRender();

function post() {
  if (title.value !== "" && description.value !== "") {
    let numberTitle = Number(title.value);
    let numberDescription = Number(description.value);
    const isNotNumber =
      isNaN(numberTitle) || isNaN(numberDescription) ? true : false;
    if (isNotNumber) {
      data.push({
        id: Date.now(),
        type: "post",
        title: title.value,
        description: description.value,
      });

      displayRender();
    } else {
      data.push({
        id: Date.now(),
        type: "game",
        title: numberTitle,
        description: numberDescription,
      });

      displayRender();
    }
  } else {
    alert("Fill title and description both");
  }
}

function editItem(i) {
  title.value = data[i].title;
  description.value = data[i].description;

  updateBtn.classList.remove("hidden");
  postBtn.classList.add("hidden");

  updateIndex = i;
}

function update() {
  if (title.value !== "" && description.value !== "") {
    let numberTitle = Number(title.value);
    let numberDescription = Number(description.value);
    const isNotNumber =
      isNaN(numberTitle) || isNaN(numberDescription) ? true : false;
    console.log(isNotNumber);
    if (isNotNumber) {
      data[updateIndex].type = "post";
      data[updateIndex].title = title.value;
      data[updateIndex].description = description.value;

      displayRender();
    } else {
      data[updateIndex].type = "game";
      data[updateIndex].title = numberTitle;
      data[updateIndex].description = numberDescription;

      displayRender();
    }
    updateBtn.classList.add("hidden");
    postBtn.classList.remove("hidden");
  } else {
    alert("Fill title and description both");
  }
}

function playGame() {
  alert("Game playing");
}
