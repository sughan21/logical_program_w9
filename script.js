//21.You are given a number. Write a program that checks if the number is a prime number(i.e., only divisible by 1 and itself) and displays the result on a web page.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function checkPrime() {
  const number = parseInt(document.getElementById("numberInput").value);
  const resultElement = document.getElementById("result");

  if (isNaN(number)) {
    resultElement.textContent = "Please enter a valid number.";
  } else if (isPrime(number)) {
    resultElement.textContent = `${number} is a prime number.`;
  } else {
    resultElement.textContent = `${number} is not a prime number.`;
  }
}

//22.You are given a list of numbers. Write a program that finds the second smallest number in the list and displays the result on a web page.

function findSecondSmallest() {
  const inputString = document.getElementById("numbersInput").value;
  const numbers = inputString.split(",").map(Number);

  if (numbers.length < 2) {
    document.getElementById("result").textContent =
      "Please enter at least two numbers.";
    return;
  }

  numbers.sort((a, b) => a - b);
  const secondSmallest = numbers[1];
  document.getElementById(
    "result"
  ).textContent = `The second smallest number is: ${secondSmallest}`;
}

//23.You are given a list of words. Write a program that sorts the words in alphabetical order and displays the result on a web page.

function sortWords() {
  const inputText = document.getElementById("wordsInput").value;
  const resultParagraph = document.getElementById("result");
  const words = inputText.split(",");

  if (words.length === 0) {
    resultParagraph.textContent = "Please enter some words.";
    return;
  }

  words.sort();
  const sortedWords = words.join(", ");
  resultParagraph.textContent = `Sorted words: ${sortedWords}`;
}

//24.You are given two arrays of numbers. Write a program that finds the common elements between the two arrays and displays the result on a web page.

function findCommonElements() {
  const array1Input = document.getElementById("array1Input").value;
  const array2Input = document.getElementById("array2Input").value;
  const resultParagraph = document.getElementById("result");

  const array1 = array1Input.split(",").map(Number);
  const array2 = array2Input.split(",").map(Number);

  const commonElements = array1.filter((element) => array2.includes(element));
  if (commonElements.length === 0) {
    resultParagraph.textContent = "No common elements found.";
  } else {
    const commonElementsString = commonElements.join(",");
    resultParagraph.textContent = `Common elements: ${commonElementsString}`;
  }
}

//26.You are given a string. Write a program that replaces all occurrences of a particular character with another character and displays the result on a web page.
function replaceChars() {
  const inputString = document.getElementById("inputString").value;
  const searchChar = document.getElementById("searchChar").value;
  const replaceChar = document.getElementById("replaceChar").value;
  const resultParagraph = document.getElementById("result");

  if (!searchChar || !replaceChar) {
    resultParagraph.textContent =
      "Please enter both search and replacement characters.";
    return;
  }

  const replacedString = inputString.replace(
    new RegExp(searchChar, "g"),
    replaceChar
  );
  resultParagraph.textContent = `Result: ${replacedString}`;
}

// 27.You are given a list of integers representing weights of items and their correspondingvalues. Write a program to find the maximum value that can be obtained by selecting a subset of items with a total weight not exceeding a given limit, and display the result on a web page.

//28.You are given a string. Write a program that converts every letter to its corresponding ASCII value and displays the result on a web page.

//29.You are given an array of numbers. Write a program that finds the difference between the largest and smallest numbers in the array and displays the result on a web page.

function findDifference() {
  const inputNumbers = document.getElementById("inputNumbers").value;
  const resultParagraph = document.getElementById("result");

  const numbers = inputNumbers.split(",").map(Number);

  if (numbers.length < 2) {
    resultParagraph.textContent = "Please enter at least two numbers.";
    return;
  }

  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);
  const difference = maxNumber - minNumber;

  resultParagraph.textContent = `Difference between the largest and smallest numbers: ${difference}`;
}
