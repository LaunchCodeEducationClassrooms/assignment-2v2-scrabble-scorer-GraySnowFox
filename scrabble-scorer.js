// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();

	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`

		 }
	  }

	}
	return letterPoints;
};


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function simpleScore(word){
  word = word.toUpperCase();

  let score = 0;

    for (let i=0; i<word.length; i++){
      score++;
    }

  return score;
};

function vowelBonusScore(word){
  word = word.toUpperCase();

  let score = 0;
  let vowel = ["A", "E", "I", "O", "U"];

  for(let i=0; i < word.length; i++){
    if(vowel.includes(word[i])){
      score += 3; 
    } else {
      score++;
    }
  }

  return score;  
};

let simpleObject = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore
};

let oldScoreObject = {
  name: "Scrabble",
  description: "The traditional scoring algorithm",
  scorerFunction: oldScrabbleScorer
};

let vowelObject = {
  name: "Bonus Vowels",
  description: "Vowels are 3pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScore
};




function initialPrompt() {
   let wordInput = input.question("Let's play some scrabble! Enter a word:")
   return wordInput;
};


function scrabbleScore(word){
  let score = 0; 

  for(i = 0; i<word.length; i++){
    score = newPointStructure.word[i];
  }
  
  return score;

};

const scoringAlgorithms = [simpleObject, vowelObject, oldScoreObject];

function scorerPrompt(){
  let correctChoice = false;
  while(correctChoice === false){
    console.log("Which scoring algorithm would you like to use?(0-2)\n");
    
    for(i=0; i< scoringAlgorithms.length; i++){
      console.log(i + " - " + scoringAlgorithms[i].name + ": " + scoringAlgorithms[i].description + "\n");
    }
    let scoreChoice = input.question("Enter 0, 1, or 2: "); 

    if(scoreChoice < 0 || scoreChoice > 2 || isNaN(scoreChoice)){
      console.clear();            
      console.log("Error, pick a number 0-2!\n" );
      
    } else {
      correctChoice = true;
      return scoringAlgorithms[scoreChoice];
    }

  }
};

function transform(object){
  let transformation = {};

  for(scores in object){
    console.log(scores);
    console.log(object[scores] + "\n");
  transformation[object[scores]] = scores;


  }

  return transformation;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  let wordInput = initialPrompt();
  console.log(newPointStructure);
  console.log("Score for " + wordInput + ": " + scorerPrompt().scorerFunction(wordInput));


 /* console.log(oldScrabbleScorer(wordInput));
  console.log("Simple score: " + simpleScore(wordInput));
  console.log("Vowel score: " + vowelBonusScore(wordInput));
*/
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

