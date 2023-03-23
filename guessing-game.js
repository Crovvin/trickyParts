function guessingGame() {
    let guesses = 0;
    let gameover = false;
    const answer = Math.floor(Math.random() * 100);
    return function guess(number) {
      if (gameover) return "The game is over, you already won!";
      guesses++;
      if (number === answer) {
        const guess = guesses === 1 ? "guess" : "guesses";
        gameover = true;
        return `You win! You found ${number} in ${guesses} ${guess}.`;
      }
      if (number < answer) return `${number} is too low!`;
      if (number > answer) return `${number} is too high!`;
    };
}

module.exports = { guessingGame };
