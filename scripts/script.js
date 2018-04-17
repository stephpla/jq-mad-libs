const question = 'Please provide a';
let data = [
  ['n exclamation', '(Wow!, Oh!, Yuck!)', '! he said '],
  ['n adverb', 'A description of an action (-ly)', ' as he jumped into his convertible '],
  [' noun', 'person, place or thing', ' and drove off with his '],
  [' adjective', 'A describing word', ' wife.']
];
let index = 0;
let product = '';
const startButton = document.getElementById('start-button');
const clearButton = document.querySelector('#clear-button');
const enterButton = document.getElementById('enter-button');
const questionSpan = document.querySelector('#question-span');
const textArea = document.querySelector('textarea');
const madLib = document.querySelector('#mad-lib-generated');
const answerArea = document.getElementById("answer-area");

answerArea.style.visibility = "hidden";
clearButton.style.visibility = "hidden";

function launchMadLib() {
  startButton.style.visibility = "hidden";
  if (index === data.length) {
    console.log(product);
    executeMadLib();
  } else {
    questionSpan.innerHTML = question + data[index][0];
    textArea.setAttribute('placeholder', data[index][1]);
    answerArea.style.visibility = "visible";
    console.log(product);
  }
}

function loopMadLib() {
    product += textArea.value + data[index][2];
    index += 1;
    textArea.value = '';
    launchMadLib();
}

function executeMadLib() {
  var pTag = document.createElement("P");
  var text = document.createTextNode(product);

  pTag.appendChild(text);
  madLib.appendChild(pTag);

  clearButton.style.visibility = "visible";
  document.getElementById("answer-area").style.visibility = "hidden";
  startButton.style.visibility = "visible";
  product = '';
  index = 0;
}

function clearPage() {
  madLib.innerHTML = '';
  clearButton.style.visibility = "hidden";
}

startButton.addEventListener("click", launchMadLib, false);
clearButton.addEventListener("click",clearPage, false);
enterButton.addEventListener("click", loopMadLib, false);
