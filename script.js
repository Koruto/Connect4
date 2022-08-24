'use strict';

var tile = document.getElementsByClassName('tile');
var activePlayer = 0;
var checkTile;
var count = 0;
var newElement, newID;

document.querySelector('.play').addEventListener('click', function () {
  /* Change Screen to Game Screen */ /* !  */ document
    .querySelector('.mainScreen')
    .classList.add('hidden');
  document.querySelector('.gameScreen').classList.remove('hidden');
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
  /* Clicking Tile */ element.addEventListener('click', function () {
    if (activePlayer) checkTile = 'blue';
    else checkTile = 'red';

    for (let i = element.id[5]; i < 6; i++) {
      let tileName = 'tile-' + i + element.id[6];

      let tN = document.getElementById(tileName);
      if (tN.classList.contains('clicked')) break;
      else newID = tileName;
    }

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

    // Vertical Check
    count = 0;
    for (let j = 0; j < 7; j++) {
      let tileName = 'tile-' + newID[5] + j;
      let tN = document.getElementById(tileName);

      if (tN.classList.contains(checkTile)) {
        count += 1;
      } else {
        count = 0;
      }

      if (count == 4) window.alert(checkTile + 'Vertical Wins!');
    }

    // Horizontal Check
    count = 0;
    for (let i = 0; i < 6; i++) {
      let tileName = 'tile-' + i + newID[6];
      let tN = document.getElementById(tileName);

      if (tN.classList.contains(checkTile)) {
        count += 1;
      } else {
        count = 0;
      }

      if (count == 4) window.alert(checkTile + 'Horizontal Wins!');
    }

    // Top Left to Right Bottom Diagonal Check
    count = 0;
    // Defining the Start Point
    let x = parseInt(newID[5]) + parseInt(newID[6]);
    if (x > 5) x = 5;
    let y = parseInt(newID[5]) + parseInt(newID[6]) - x;
    if (y < 0) y = 0;

    while (x >= 0 && y < 7) {
      let tileName = 'tile-' + x + y;
      let tN = document.getElementById(tileName);
      if (tN.classList.contains(checkTile)) count += 1;
      else count = 0;
      x--;
      y++;
      if (count == 4) window.alert(checkTile + 'Diagonal-Left Wins!');
    }

    // Top Right to Left Bottom Diagonal Check
    let one = parseInt(newID[5]);
    let two = parseInt(newID[6]);
    let ans;
    one > two ? (ans = two) : (ans = one);
    x = parseInt(newID[5]) - ans;
    y = parseInt(newID[6]) - ans;

    count = 0;
    while (x < 6 && y < 7) {
      let tileName = 'tile-' + x + y;
      let tN = document.getElementById(tileName);
      if (tN.classList.contains(checkTile)) count += 1;
      else count = 0;
      x++;
      y++;
      if (count == 4) window.alert(checkTile + 'Diagonal-Right Wins!');
    }

    if (activePlayer) activePlayer = 0;
    else activePlayer = 1;
  });
});
