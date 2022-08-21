'use strict';

var tile = document.getElementsByClassName('tile');
var activePlayer = 0;
var checkTile;
var count = 0;

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
  console.log(element);
  console.log(1);
  /* Clicking Tile */ element.addEventListener('click', function () {
    if (activePlayer) checkTile = 'blue';
    else checkTile = 'red';

    if (!element.classList.contains('clicked')) {
      if (activePlayer) {
        document.getElementById(element.id).innerHTML +=
          '<div class="center blueTile"></div>';
        element.classList.add('blue');
      } else {
        document.getElementById(element.id).innerHTML +=
          '<div class="center redTile"></div>';
        element.classList.add('red');
      }
      element.classList.add('clicked');
    } else {
      console.log('Tile Already Exists!'); /* TODO Better Error */
    }

    // Vertical Check

    for (let j = 0; j < 7; j++) {
      let tileName = 'tile-' + element.id[5] + j;
      let tN = document.getElementById(tileName);

      if (tN.classList.contains(checkTile)) {
        count += 1;
      } else {
        count = 0;
      }

      if (count == 4) window.alert(checkTile + ' Wins!');
    }

    // Horizontal Check

    for (let i = 0; i < 6; i++) {
      let tileName = 'tile-' + i + element.id[6];
      let tN = document.getElementById(tileName);

      if (tN.classList.contains(checkTile)) {
        count += 1;
      } else {
        count = 0;
      }

      if (count == 4) window.alert(checkTile + ' Wins!');
    }

    if (activePlayer) activePlayer = 0;
    else activePlayer = 1;
  });
});
