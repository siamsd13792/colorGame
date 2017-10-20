var numSquares = 6
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message")
var hh1 = document.querySelector("#hh1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")
// var easyBtn = document.querySelector("#easyBtn")
// var hardBtn = document.querySelector("#hardBtn")

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function () {
    modeButtons[1].classList.remove("selected")
    modeButtons[0].classList.remove("selected")
    this.classList.add("selected");

    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    // if (this.textContent === "Easy") {
    //   numSquares = 3;
    // }else {
    //   numSquares = 6;
    // }
    reset();
    //figure out how many squares to show
    //pick new colors
    //pick a new pickedColor
    //update page to reflect chages
  })
}

function reset() {
  colors = generateRandomColor(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change color ot squares
  for (var i = 0; i < squares.length; i++) {
    //เพิ่มสี
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "New Colors";
  hh1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   hh1.style.backgroundColor = "#232323";
//   numSquares = 3
//   colors = generateRandomColor(numSquares);
//   pickedColor = pickColor();
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.background = colors[i];
//     }else {
//       squares[i].style.display = "none";
//     }
//   }
// })
// hardBtn.addEventListener("click", function() {
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   hh1.style.backgroundColor = "steelblue";
//   colorDisplay.textContent = pickedColor;
//   numSquares = 6
//   colors = generateRandomColor(numSquares);
//   pickedColor = pickColor();
//   for (var i = 0; i < squares.length; i++) {
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function() {
  // //เเสดงสี่ที่สุ่มใหม่ทั้งหมด
  // //generate all new clors
  // colors = generateRandomColor(numSquares);
  // //pick a new random color from array
  // pickedColor = pickColor();
  // //change colorDisplay to match picked Color
  // colorDisplay.textContent = pickedColor;
  // resetButton.textContent = "New Colors";
  // messageDisplay.textContent = "";
  // //change color ot squares
  // for (var i = 0; i < squares.length; i++) {
  //   //เพิ่มสี
  //   squares[i].style.backgroundColor = colors[i];
  // }
  // resetButton.textContent = "New Colors";
  // hh1.style.backgroundColor = "steelblue";
  reset();

})

//เเสดงโจทย์ให้ตรงกับสีที่สุ่มมา
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //เพิ่มสี
  squares[i].style.backgroundColor = colors[i];
  //เพิ่มEvent
  squares[i].addEventListener("click", function() {
    //ดักจับeventทีคลิก
    var clickedColor = this.style.backgroundColor;
    //เปรียบเทียบกับ pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct !";
      changeColor(pickedColor)
      hh1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?"
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  })
}

var changeColor = (color) => {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}


function generateRandomColor(num) {
  //make an array
  var arr = []
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color push in to array
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a red form 0 - 255
  var r = Math.floor((Math.random() * 256));
  //pick a green form 0- 255
  var g = Math.floor((Math.random() * 256));
  //pick a blue form 0 - 255
  var b = Math.floor((Math.random() * 256));
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
