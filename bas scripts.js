
function getUserInput(){
  // var userInput = document.getElementById("user-input").value;
  // document.getElementById("test-div").appendChild(document.createTextNode(userInput));

}

const elementTypes = {
  div: "div",
  h1: "h1",
  h2: "h2",
  button: "button",
  input: "input",
  p: "p"
}

var fieldIdList = [];

// Retrieve user selected values and use them to create a new element
function createElement(){
  var userText = document.getElementById("user-input").value;
  var elementType = document.getElementById("type-menu").value;
  var userColor = document.getElementById("color-menu").value;

  var newElement = document.createElement(elementType);
  newElement.id = createId;
  newElement.style.width = "50%";
  newElement.style.color = userColor;
  newElement.innerHTML = userText;
  fieldIdList.push(newElement.id);
  document.getElementById("first-container").appendChild(newElement);

}
// If the ID list is empty, creates an ID from a random value
// If it already contains IDs, creates a new one by adding some number to the previous one
function createId(){
  if (fieldIdList.length === 0){
    var newId = Math.random();
    fieldIdList.push(randomId);
    return newId;
  }else{
    var lastID = fieldIdList[fieldIdList.length-1];
    var newId = lastID+.1;
    fieldIdList.push(newId);
    return newId;
  }

}



// function createElement(){
//   var userText = document.getElementById("user-input").value;
//   var newElement = document.createElement("div");
//   newElement.id = "newElement";
//   newElement.innerHTML = userText;
//   newElement.style.width = "50%";
//   newElement.style.backgroundColor = "red";
//   document.getElementById("first-container").appendChild(newElement);
//
// }
