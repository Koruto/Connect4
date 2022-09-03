'use strict';

// Variables

const mainScreen = document.querySelector('.mainScreen');
const gameScreen = document.querySelector('.gameScreen');

var tile = document.getElementsByClassName('tile');
var activePlayer = 0;
var checkTile;
var count = 0;
var newElement, newID, tileName;

// Functions

function toggleScreen() {
  mainScreen.classList.toggle('hidden');
  gameScreen.classList.toggle('hidden');
}

function checkTi(tileName, checkTile) {
  let tN = document.getElementById(tileName);
  return tN.classList.contains(checkTile);
}

function gravity(i, j) {
  for (; i < 6; i++) {
    tileName = 'tile-' + i + j;
    if (checkTi(tileName, 'clicked')) break;
    else newID = tileName;
  }
}

function verticalCheck() {
  for (let j = 0; j < 7; j++) {
    tileName = 'tile-' + newID[5] + j;
    checkTi(tileName, checkTile) ? count++ : (count = 0);
    if (count == 4) window.alert(checkTile + 'Vertical Wins!');
  }
  count = 0;
}

function horizontalCheck() {
  for (let i = 0; i < 6; i++) {
    tileName = 'tile-' + i + newID[6];
    checkTi(tileName, checkTile) ? count++ : (count = 0);
    if (count == 4) window.alert(checkTile + 'Horizontal Wins!');
  }
  count = 0;
}

function bottomLTRCheck(x, y) {
  if (x > 5) x = 5;
  if (y < 0) y = 0;

  while (x >= 0 && y < 7) {
    tileName = 'tile-' + x + y;
    checkTi(tileName, checkTile) ? count++ : (count = 0);
    x--;
    y++;
    if (count == 4) window.alert(checkTile + 'Diagonal-Left Wins!');
  }
  count = 0;
}

function topLTRCheck(x, y) {
  let one = parseInt(newID[5]);
  let two = parseInt(newID[6]);
  let ans;
  one > two ? (ans = two) : (ans = one);
  x = parseInt(newID[5]) - ans;
  y = parseInt(newID[6]) - ans;

  while (x < 6 && y < 7) {
    tileName = 'tile-' + x + y;
    checkTi(tileName, checkTile) ? count++ : (count = 0);
    x++;
    y++;
    if (count == 4) window.alert(checkTile + 'Diagonal-Right Wins!');
  }
  count = 0;
}

function winCheck() {
  let x = parseInt(newID[5]) + parseInt(newID[6]);
  let y = parseInt(newID[5]) + parseInt(newID[6]) - x;

  verticalCheck();
  horizontalCheck();
  bottomLTRCheck(x, y);
  topLTRCheck(x, y);
}

// Change Screen to Game Screen
document.querySelector('.play').addEventListener('click', function () {
  toggleScreen();
});

// Return Button
document.querySelector('.return').addEventListener('click', function () {
  toggleScreen();
});

Array.prototype.forEach.call(tile, function (element) {
  // element.addEventListener('mouseenter', function () {
  //   if (!activePlayer) {
  //     element.style.backgroundColor = 'rgba(227, 40, 40, 0.559)';
  //   } else {
  //     element.style.backgroundColor = 'rgba(59, 40, 236, 0.514)';
  //   }
  // });

  // element.addEventListener('mouseleave', function () {
  //   element.style.backgroundColor = '#423f3ea2';
  // });
  // console.log(element);
  // console.log(1);

  // Clicking Tile

  element.addEventListener('click', function () {
    activePlayer ? (checkTile = 'blue') : (checkTile = 'red');

    gravity(element.id[5], element.id[6]);

    newElement = document.getElementById(newID);

    if (!newElement.classList.contains('clicked')) {
      if (activePlayer) {
        document.getElementById(newID).innerHTML +=
          '<div class="center blueTile"></div>';
        newElement.classList.add('blue');
      } else {
        document.getElementById(newID).innerHTML +=
          '<div class="center redTile"></div>';
        newElement.classList.add('red');
      }
      newElement.classList.add('clicked');
    } else {
      console.log('Tile Already Exists!'); /* TODO Better Error */
    }

    winCheck();

    activePlayer ? (activePlayer = 0) : (activePlayer = 1);
  });
});
