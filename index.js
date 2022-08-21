let books = [
  {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    maxPages: 200,
    onPage: 60,
  },
  {
    title: "Harry Potter",
    author: "J.K Rowling",
    maxPages: 250,
    onPage: 150,
  },
  {
    title: "50 Shades of Gray",
    author: "E.L James",
    maxPages: 150,
    onPage: 150,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    maxPages: 350,
    onPage: 300,
  },
  {
    title: "Hamlet",
    author: "Wiliam Shakespeare",
    maxPages: 550,
    onPage: 550,
  },
];

const nameList = document.createElement("ul");
document.body.append(nameList);
const infoList = document.createElement("ul");
document.body.append(infoList);

const table = document.createElement("table");
const tableTitle = document.createElement("th");
const tableAutor = document.createElement("th");
const tableMaxPages = document.createElement("th");
const tableOnPage = document.createElement("th");
const tableProgress = document.createElement("th");

table.classList = "table table-bordered";

tableTitle.innerText = "Title";
tableAutor.innerText = "Author";
tableMaxPages.innerText = "Max Pages";
tableOnPage.innerText = "On Page";
tableProgress.innerText = "Progress";
document.body.append(table);
table.append(tableTitle, tableAutor, tableMaxPages, tableOnPage, tableProgress);

function calcPercent(partial, total) {
  return Math.floor((partial / total) * 100);
}

books.forEach((book) => {
  const nameLi = document.createElement("li");

  nameLi.innerText += `${book.title} by ${book.author}`;
  nameList.append(nameLi);

  const infoLi = document.createElement("li");

  if (book.maxPages === book.onPage) {
    infoLi.innerText += `You already read ${book.title} by ${book.author}`;
    infoLi.style.color = "green";
  } else {
    infoLi.innerText += `You still need to read ${book.title} by ${book.author}`;
    infoLi.style.color = "red";
  }
  infoList.append(infoLi);

  let tr = document.createElement("tr");

  let td = document.createElement("td");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");

  let progressbar = document.createElement("div");
  let percentBar = document.createElement("div");
  let percent = calcPercent(book.onPage, book.maxPages);

  progressbar.classList = "progressbar";
  percentBar.classList = "percentBar";

  td.innerText = book.title;
  td1.innerText = book.author;
  td2.innerText = book.maxPages;
  td3.innerText = book.onPage;
  percentBar.innerText = `${percent}%`;
  percentBar.style.width = `${percent}%`;

  table.append(tr);
  tr.append(td, td1, td2, td3, td4);
  td4.append(progressbar, percentBar);
  progressbar.append(percentBar);
});

const form = document.querySelector("form");
const titleInput = document.querySelector(".title");
const authorInput = document.querySelector(".author");
const onPageInput = document.querySelector(".onPage");
const maxPageInput = document.querySelector(".maxPage");
const button = document.querySelector(".btn");


function addBook(ev) {
  ev.preventDefault();


  const newBooks = {
    title: titleInput.value,
    author: authorInput.value,
    maxPages: maxPageInput.value,
    onPage: onPageInput.value,
  };

  const addTr = document.createElement("tr");

  const TitleTd = document.createElement("td");
  const AuthorTd = document.createElement("td");
  const MaxPagesTd = document.createElement("td");
  const OnPageTd = document.createElement("td");
  const ProgressTd = document.createElement("td");

  let addprogressbar = document.createElement("div");
  let addpercentBar = document.createElement("div");

  addpercentBar.innerText = `${calcPercent(newBooks.onPage, newBooks.maxPages)}%`;
  addpercentBar.style.width = `${calcPercent(newBooks.onPage, newBooks.maxPages)}%`;
  addprogressbar.classList = "progressbar";
  addpercentBar.classList = "percentBar";

  TitleTd.innerText = newBooks.title;
  AuthorTd.innerText = newBooks.author;
  MaxPagesTd.innerText = newBooks.maxPages;
  OnPageTd.innerText = newBooks.onPage;


  if (
    !TitleTd.innerText ||
    !AuthorTd.innerText ||
    !OnPageTd.innerText ||
    !MaxPagesTd.innerText
  ) {
    return;
  }

  if (OnPageTd.innerText > MaxPagesTd.innerText) {
    let message = document.createElement("span");
    message.innerText = "Enter the correct number of pages read!";
    message.style.color = "red";
    form.append(message);

    return;
  }

  table.append(addTr);
  addTr.append(TitleTd, AuthorTd, MaxPagesTd, OnPageTd, ProgressTd);
  ProgressTd.append(addprogressbar, addpercentBar);
  addprogressbar.append(addpercentBar);
}

// I use append here because form is the only  element that exists in html.
document.body.append(form);

form.addEventListener("submit", addBook);
