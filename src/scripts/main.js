'use strict';

const slider = document.querySelector('.header');

document.querySelectorAll('.header__toggler').forEach(function(indicator, index) {
  indicator.addEventListener('click', function() {
    document.querySelector('.selected').classList.remove('selected');
    indicator.classList.add('selected');

    console.log(index);

    if(index === 0) {
      slider.classList.add('first');
      slider.classList.remove('second');
      slider.classList.remove('third');
    } else if(index === 1) {
      slider.classList.add('second');
      slider.classList.remove('first');
      slider.classList.remove('third');
    } else {
      slider.classList.add('third');
      slider.classList.remove('second');
      slider.classList.remove('first');
    }
  });
});