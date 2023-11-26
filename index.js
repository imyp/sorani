import letters from "./letters.json" assert { type: "json"};

/**
 * @typedef Letter
 * @prop {string} name
 * @prop {string} kurdish
 * @prop {string} latin
 * @prop {boolean} hamza
 * @prop {boolean} connects
 */

const hamzaLetter = "ئ";
const connector = "ـ";

/** @type {Letter[]} */

/** 
 * @param {Letter} letter
 * @returns {string}
 */
function createLetterString(letter){
  const start = (letter.hamza ? hamzaLetter + letter.kurdish : letter.kurdish) + (letter.connects ? connector : "");
  const middle = connector + letter.kurdish + (letter.connects ? connector : "");
  const end = connector + letter.kurdish;
  const alone = letter.kurdish;
  return letter.latin + " " + start + " " + middle + " " + end + " " + alone;
}

/**
 * @param {Letter} letter
 * @returns {HTMLParagraphElement}
 */
function createLetterElement(letter) {
  const newElement = document.createElement("p");
  newElement.innerText = createLetterString(letter);
  return newElement;
}

const div = document.querySelector("div");
letters.forEach((letter)=>div.appendChild(createLetterElement(letter)));


