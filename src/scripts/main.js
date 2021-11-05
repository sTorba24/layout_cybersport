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

document.querySelectorAll('.main__toggler').forEach(function(indicator, index) {
  indicator.addEventListener('click', function() {
    document.querySelector('.selected__main__toggler').classList.remove('selected__main__toggler');
    indicator.classList.add('selected__main__toggler');
  
    if(index === 0) {
      document.querySelector('.matches--container__visible').classList.remove('matches--container__visible');
      document.querySelector('.matches--container__first').classList.add('matches--container__visible');
    } else if(index === 1) {
      document.querySelector('.matches--container__visible').classList.remove('matches--container__visible');
      document.querySelector('.matches--container__second').classList.add('matches--container__visible');
    } else {
      document.querySelector('.matches--container__visible').classList.remove('matches--container__visible');
      document.querySelector('.matches--container__third').classList.add('matches--container__visible');
    }
  });
});

const f = () => {
  document.querySelectorAll('.main__toggler').forEach(function(indicator, index) {
    indicator.addEventListener('click', function() {
      document.querySelector('.selected__main__toggler').classList.remove('selected__main__toggler');
      indicator.classList.add('selected__main__toggler');
    
      if(index === 0) {
        document.querySelector('.matches--container__visible').classList.remove('matches--container__visible');
        document.querySelector('.matches--container__first').classList.add('matches--container__visible');
      } else if(index === 1) {
        document.querySelector('.matches--container__visible').classList.remove('matches--container__visible');
        document.querySelector('.matches--container__second').classList.add('matches--container__visible');
      } else {
        document.querySelector('.matches--container__visible').classList.remove('matches--container__visible');
        document.querySelector('.matches--container__third').classList.add('matches--container__visible');
      }
    });
  });
}

document.querySelectorAll('.page__main__button').forEach(function(indicator, index) {
  indicator.addEventListener('click', function() {
    document.querySelector('.page__main__button-selected').classList.remove('page__main__button-selected');
    indicator.classList.add('page__main__button-selected');
    document.querySelector('.matches--container__visible').classList.remove('matches--container__visible');
    document.querySelector('.shtuka').classList.add('matches--container__visible');
    console.log(index);
    if(index === 1) {
      document.querySelectorAll('.main__toggler').forEach(function(indicator, index) {
        indicator.parentElement.innerHTML += '';
      });
    } else {
      document.querySelector('.matches--container__visible').classList.remove('matches--container__visible');
      document.querySelector('.matches--container__first').classList.add('matches--container__visible');
      f();
    }
  });
});

