let allItems;
let itemsNumber = document.querySelectorAll(".items-number");

function createCard(user) {
  const div = document.createElement("div");
  div.classList.add("card");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("card-img");

  const image = document.createElement("img");
  image.alt = user.name;
  image.src = `./img/${user.image}.png`;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.textContent = user.name;

  const cardPrice = document.createElement("p");
  cardPrice.textContent = user.price + " $";

  cardBody.append(cardTitle, cardPrice);
  imgDiv.append(image);
  div.append(imgDiv, cardBody);
  return div;
}

let filterType = [
  "MALE",
  "FEMALE",
  "LE GRAND BIKES",
  "KROSS",
  "EXPLORER",
  "VISITOR",
  "PONY",
  "FORCE",
  "E-BIKES",
  "IDEAL",
];

function allData() {
  fetch("https://json-project3.herokuapp.com/products")
    .then((response) => response.json())
    .then((data) => {
      allItems = data;
      $(".inner-box").empty();
      data.forEach((e) => {
        $(".inner-box").append(createCard(e));
      });

      let allBikesNum = document.querySelector(".all-bikes");
      allBikesNum.textContent = data.length;
    });
}

function genderType(filterType, _type) {
  fetch("https://json-project3.herokuapp.com/products")
    .then((response) => response.json())
    .then((user) => {
      let filteredList = user.filter((gen) => gen[_type] === filterType);
      $(".inner-box").empty();
      filteredList.forEach((item) => {
        $(".inner-box").append(createCard(item));
      });
    });
}

let showAll = document.querySelector(".show-all");
showAll.addEventListener("click", function () {
  showAll.classList.add("active");
});

let onLoad = () => {
  fetch("https://json-project3.herokuapp.com/products")
    .then((response) => response.json())
    .then((user) => {
      itemsNumber.forEach((num, key) => {
        let filteredList;

        if (key > 1) {
          num.parentElement.addEventListener("click", function (e) {
            genderType(filterType[key], "brand");
          });
          filteredList = user.filter(
            (num) => num.brand === filterType[key]
          ).length;
        } else {
          num.parentElement.addEventListener("click", function () {
            genderType(filterType[key], "gender");
          });
          filteredList = user.filter(
            (num) => num.gender === filterType[key]
          ).length;
        }

        num.innerHTML = filteredList;
      });
    });
};

window.onload = function () {
  document.querySelector(".show-all").click();
};
document.addEventListener("load", onLoad());
document.querySelector(".show-all").addEventListener("click", function () {
  allData();
});
