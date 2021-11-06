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

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);
