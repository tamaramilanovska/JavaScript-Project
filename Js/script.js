$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


// arrays with the words
var animals = ["rabbit", "elephant", "dog", "cat", "mouse"];
let geography = ["mexico", "madrid", "belgrade", "moskva", "sofia"];
let random = ["flower", "tree", "computer", "telephone", "food", "hand"];
let food = ["pizza", "hamburger", "icecream", "cake", "pasta"];
let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
let word = '';
let guessedLetters = [];

const categoryAnimals = document.querySelector("#category-animals");
const categoryGeography = document.querySelector("#category-geography");
const categoryRandom = document.querySelector("#category-random");
const categoryFood = document.querySelector("#category-food");
const categoryPlanets = document.querySelector("#category-planets");
const result = document.querySelector("#wordContainer");
const contentDiv = document.querySelector("#contentDiv");
let main = document.querySelector(".main");
const heart01 = document.querySelector("#heart-01");
const heart02 = document.querySelector("#heart-02");
const heart03 = document.querySelector("#heart-03");
const heart04 = document.querySelector("#heart-04");
const heart05 = document.querySelector("#heart-05");
let hearts = [heart01, heart02, heart03, heart04, heart05];


// Creating the keyboard 
function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn"
        id='` + letter + `'
        onClick="checkGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

generateButtons();

// Checking if the letter is in the word
function checkGuess(chosenLetter) {
  guessedLetters.indexOf(chosenLetter) === -1 ? guessedLetters.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (word.indexOf(chosenLetter) >= 0) {
    displayWord();
    checkWord();
  } else if (word.indexOf(chosenLetter) === -1) {
    last_element = hearts.pop();
    last_element.style.visibility = "hidden";
    ifLost();
  }
}

// Checking if the game is won
function checkWord() {
  if (wordStatus === word) {
      document.getElementById('keyboard').innerHTML = '<h2 style="color:green">Congratulations, you won!!!</h2>';
      document.getElementById("contentDiv").innerHTML = "";
    
  }
}

// Checking if the game is lost
function ifLost() {
  if(hearts.length == 0){
    document.getElementById('keyboard').innerHTML = '<h2 style="color:red">You lost, try again :( </h2>';
    document.getElementById("contentDiv").innerHTML = "";
    document.getElementById("p").innerHTML = "The word was: ";
    document.getElementById('wordContainer').innerHTML = `<span style="font-weight:600">${word}</span>`;
  }
}

// Function for getting the word from category
function getRandomWord(e){
  if(e.target.classList.contains("animals")){
    let html = "";
    html += `<h2 class = "chosen-category">You have chosen category <span style = "font-weight:800">animals</span>.<h2>`;
    contentDiv.innerHTML = html;
    word = animals[Math.floor(Math.random() * animals.length)];
    // function to display the word 
    function displayWord(){
        wordStatus = word.split('').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        result.innerHTML = wordStatus;
    }
    console.log(word);
    displayWord();
    generateButtons();
    visibleHearts();
    document.querySelector("#keyboard").style.visibility="visible";
    document.querySelector(".lifes").style.visibility ="visible";
    document.querySelector("#reset").style.visibility ="visible";
    main.style.height = "800px";
} else if(e.target.classList.contains("geography")){
    let html = "";
    html += `<h2 class = "chosen-category">You have chosen category <span style = "font-weight:800">geography</span>.</h2>`;
    contentDiv.innerHTML = html;
    word = geography[Math.floor(Math.random() * geography.length)];
    // function to display the word 
    function displayWord(){
        wordStatus = word.split('').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        result.innerHTML = wordStatus;
    }
    console.log(word)
    displayWord();
    generateButtons();
    visibleHearts();
    document.querySelector("#keyboard").style.visibility="visible";
    document.querySelector(".lifes").style.visibility ="visible";
    document.querySelector("#reset").style.visibility ="visible";
    main.style.height = "800px";
} else if(e.target.classList.contains("random")){
    let html = "";
    html += `<h2 class = "chosen-category">You have chosen category <span style = "font-weight:800">random</span>.<h2>`;
    contentDiv.innerHTML = html;
    word = random[Math.floor(Math.random() * random.length)];
    // function to display the word 
    function displayWord(){
        wordStatus = word.split('').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        result.innerHTML = wordStatus;
    }
    console.log(word);
    displayWord();
    generateButtons();
    visibleHearts();
    document.querySelector("#keyboard").style.visibility="visible";
    document.querySelector(".lifes").style.visibility ="visible";
    document.querySelector("#reset").style.visibility ="visible";
    main.style.height = "800px";
} else if(e.target.classList.contains("food")){
    let html = "";
    html += `<h2 class = "chosen-category">You have chosen category <span style = "font-weight:800">food</span>.<h2>`;
    contentDiv.innerHTML = html;
    word = food[Math.floor(Math.random() * food.length)];
    // function to display the word 
    function displayWord(){
        wordStatus = word.split('').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        result.innerHTML = wordStatus;
    } 
    console.log(word);
    displayWord();
    generateButtons();
    visibleHearts();
    document.querySelector("#keyboard").style.visibility="visible";
    document.querySelector(".lifes").style.visibility ="visible";
    document.querySelector("#reset").style.visibility ="visible";
    main.style.height = "800px";
} else if(e.target.classList.contains("planets")){
    let html = "";
    html += `<h2 class = "chosen-category">You have chosen category <span style = "font-weight:800">planets</span>.<h2>`;
    contentDiv.innerHTML = html;
    word = planets[Math.floor(Math.random() * planets.length)];
    // function to display the word 
    function displayWord(){
        wordStatus = word.split('').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        result.innerHTML = wordStatus;
    } 
    console.log(word);
    displayWord();
    generateButtons();
    visibleHearts();
    document.querySelector("#keyboard").style.visibility="visible";
    document.querySelector(".lifes").style.visibility ="visible";
    document.querySelector("#reset").style.visibility ="visible";
    main.style.height = "800px";
  }
}

// event listener for getting and displaying the word
document.addEventListener("click", getRandomWord);

// Displaying the word from the chosen category
function displayWord() {
  wordStatus = word.split('').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  console.log(word);
  document.getElementById('wordContainer').innerHTML = wordStatus;
}

// function for style "visible" for hearts
function visibleHearts () {
  heart05.style.visibility="visible";
  heart04.style.visibility="visible";
  heart03.style.visibility="visible";
  heart02.style.visibility="visible";
  heart01.style.visibility="visible";
}
// function for reset btn
function reset() {
  guessedLetters = [];
  hearts.length = 0;
  main.style.height = "350px";
  heart05.style.visibility="hidden";
  heart04.style.visibility="hidden";
  heart03.style.visibility="hidden";
  heart02.style.visibility="hidden";
  heart01.style.visibility="hidden";
  document.querySelector(".lifes").style.visibility ="hidden";
  document.querySelector("#reset").style.visibility ="hidden";
  document.querySelector("#keyboard").style.visibility="hidden";
  document.getElementById("p").innerHTML = "";
  hearts.push(heart01,heart02,heart03,heart04,heart05);
  contentDiv.innerHTML = "";
  document.getElementById('wordContainer').innerHTML = "";
  generateButtons();
}
// event listener for reset btn
document.getElementById("reset").addEventListener("click", reset);

displayWord();






