'use strict';

var tile = document.getElementsByClassName('tile');
var activePlayer = 0;

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

  /* Clicking Tile */ element.addEventListener('click', function () {
    if (!element.classList.contains('clicked')) {
      if (activePlayer) {
        document.getElementById(element.id).innerHTML +=
          '<div class="center blueTile"></div>';
        activePlayer = 0;
      } else {
        document.getElementById(element.id).innerHTML +=
          '<div class="center redTile"></div>';
        activePlayer = 1;
      }
      element.classList.add('clicked');
    } else {
      console.log('Tile Already Exists!'); /* TODO Better Error */
    }
  });
});
