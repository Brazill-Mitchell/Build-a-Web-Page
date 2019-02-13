
function getUserInput(){
  // var userInput = document.getElementById("user-input").value;
  // document.getElementById("test-div").appendChild(document.createTextNode(userInput));

}

let elementTypes = {
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
    newElement.style.backgroundColor = "inherit";
  newElement.className = "field-style";
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
    // var maxID = getMax();
    var lastID = fieldIdList[fieldIdList.length-1];
    var newId = lastID+.1;
    fieldIdList.push(newId);
    return newId;
  }
}
// Gets the highest existing id, then increases it to create a new one
function getMax(){
    Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  console.log(fieldIdList.max());
  return fieldIdList.max.apply(null,this);
}

function changeStyle(){
    let selectedStyle = document.getElementById("style-menu").value;
    changeCustomElementStyle(selectedStyle);
    changeNavStyle(selectedStyle);
    changeBannerStyle(selectedStyle);

    //    test
//    document.getElementById("test-div").innerHTML = document.getElementById("style-menu").value;
}

function changeCustomElementStyle(style){
    let color;
    switch(style){
        case "1": color = "rgba(255,0,0,.4)"; break;
        case "2": color = "rgba(205,100,0,.4)"; break;
        case "3": color = "rgba(210,200,0,.4)"; break;
        case "4": color = "rgba(0,255,0,.4)"; break;
        case "5": color = "rgba(0,0,255,.4)"; break;
    }
    const parent = document.getElementById("first-container");
    parent.style.backgroundColor = color;
}

function changeNavStyle(style){
    let color;
    switch(style){
        case "1": color = "rgba(255,0,0,.4)"; break;
        case "2": color = "rgba(205,100,0,.4)"; break;
        case "3": color = "rgba(210,200,0,.4)"; break;
        case "4": color = "rgba(0,255,0,.4)"; break;
        case "5": color = "rgba(0,0,255,.4)"; break;
    }
    const navItems = document.getElementsByClassName("nav-style");
    for (var x = 0; x < navItems.length; x++){
        navItems[x].style.backgroundColor = color;
    }
}
function changeBannerStyle(style){
    let color;
    switch(style){
        case "1": color = "rgba(255,0,0,.4)"; break;
        case "2": color = "rgba(205,100,0,.4)"; break;
        case "3": color = "rgba(210,200,0,.4)"; break;
        case "4": color = "rgba(0,255,0,.4)"; break;
        case "5": color = "rgba(0,0,255,.4)"; break;
    }
    document.getElementById("page-title").style.backgroundColor = color;
}