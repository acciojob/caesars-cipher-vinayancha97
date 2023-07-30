// Your Script here.

const alphabet = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
	const shift = 13;

	  function decodeChar(char) {
    const isUpperCase = char === char.toUpperCase();
    const index = alphabet.indexOf(char.toUpperCase());
    if (index === -1) {
      return char; // Character is not in the alphabet (e.g., space or punctuation)
    }
    const newIndex = (index + shift) % alphabet.length;
    const decodedChar = alphabet[newIndex];
    return isUpperCase ? decodedChar : decodedChar.toLowerCase();
  }

  // Decode the entire string
  const decodedString = encodedString.replace(/[A-Za-z]/g, (char) => decodeChar(char));

  return decodedString;
}

// Test the function with a ROT13 encoded string
const encodedString = "EBG13 rknzcyr.";
const decodedString = rot13(encodedString);
console.log(decodedString); // Output will be "ROT13 example."

	

  return; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;









