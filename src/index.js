const ENTRANTS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
];
const rollEl = document.querySelector('.roll');
const rollAgainEl = document.querySelector('.roll-again');
const namesEl = document.querySelector('.names');
const winnerEl = document.querySelector('.winner');

function randomName() {
  const rand = Math.floor(Math.random() * ENTRANTS.length);
  const name = ENTRANTS[rand];
  namesEl.innerText = name;
}

function rollClick() {
  rollEl.classList.add('hide');
  rollAgainEl.classList.add('hide');
  winnerEl.classList.add('hide');
  namesEl.classList.remove('hide');

  setDeceleratingTimeout(randomName, 10, 30);

  setTimeout(() => {
    namesEl.classList.add('hide');
    winnerEl.classList.remove('hide');
    rollAgainEl.classList.remove('hide');

    const winner = namesEl.innerText;
    winnerEl.innerText = winner;
    winnerEl.innerHTML = `<span>y el numero ganador es...</span><br>${winner}`;
  }, 4000);
}

function setDeceleratingTimeout(callback, factor, times) {
  const internalCallback = ((t, counter) => {
    return () => {
      if (--t > 0) {
        setTimeout(internalCallback, ++counter * factor);
        callback();
      }
    };
  })(times, 0);

  setTimeout(internalCallback, factor);
}
