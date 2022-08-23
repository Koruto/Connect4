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
      let tileName = 'tile-' + element.id[5] + j;
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
      let tileName = 'tile-' + i + element.id[6];
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
    for (let i = 2; i >= 0; i--) {
      for (let j = 0; j < 4; j++) {
        let k = i,
          l = j;

        while (k < 6 && l < 7) {
          let tileName = 'tile-' + k + l;
          let tN = document.getElementById(tileName);
          if (tN.classList.contains(checkTile)) count += 1;
          else count = 0;
          k++;
          l++;
          if (count == 4) window.alert(checkTile + 'Diagonal-Left Wins!');
        }
      }
    }

    // Top Right to Left Bottom Diagonal Check
    count = 0;
    for (let i = 2; i >= 0; i--) {
      for (let j = 6; j > 2; j--) {
        let k = i,
          l = j;

        while (k < 6 && l >= 0) {
          let tileName = 'tile-' + k + l;
          // console.log(tileName);
          let tN = document.getElementById(tileName);
          if (tN.classList.contains(checkTile)) count += 1;
          else count = 0;
          k++;
          l--;
          if (count == 4) window.alert(checkTile + 'Diagonal-Right Wins!');
        }
      }
    }

    if (activePlayer) activePlayer = 0;
    else activePlayer = 1;
  });
});
