Consider a game, wherein the player has to guess a target word. All the player knows is the length of the target word.

To help them in their goal, the game will accept guesses, and return the number of letters that are in the correct position.

Write a method that, given the correct word and the player's guess, returns this number.

For example, here's a possible thought process for someone trying to guess the word "dog":

function countCorrectCharacters(correctWord, guess){
  // Code here
  if ( correctWord.length !== guess.length ) {
    throw new Error();
  }

  var correctLetterCount = 0;

  for ( var x = 0; x < guess.length; x ++ ) {
    if ( correctWord[x] === guess[x] ) {
      correctLetterCount ++;
    }
  }
  return correctLetterCount;
}
