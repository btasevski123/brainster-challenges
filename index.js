const promptName = prompt("Enter a name:");

let arr = [
  ["Antonio", true, 5],
  ["Marija", false],
  ["Darko", true, 3],
];

function searchForaName(entername) {
  let name;

  let wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.append(wrapper);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === promptName) {
      name = arr[i];
      break;
    }
  }

  if (name === undefined) {
    let paragraph = document.createElement("p");
    paragraph.innerText = " Please enter а valid name!";
    paragraph.classList = "p";
    document.body.append(paragraph);
    return;
  }

  if (name[1] === true) {
    name[1] = "Voted!";

    for (let i = 0; i < 3; i++) {
      let voteDiv = document.createElement("div");
      voteDiv.id = "div";
      voteDiv.innerText = name[i];
      wrapper.append(voteDiv);
    }
  } else {
    name[1] = "Didn’t vote";
    for (let i = 0; i < 2; i++) {
      let gradeDiv = document.createElement("div");
      gradeDiv.id = "div";
      gradeDiv.innerText = name[i];
      wrapper.append(gradeDiv);
    }
  }
}

searchForaName(promptName);
