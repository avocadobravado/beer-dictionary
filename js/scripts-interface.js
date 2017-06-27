var ExampleModule = require('./../js/scripts.js').exampleModule;


$(document).ready(function() {
  var hours = parseInt($('.hours').val());
  var minutes = parseInt($('.minutes').val());

  $('#current-time').text(moment().format("h:mm A"));

  $('.hours').on('keyup', function() {
    hours = this.value;
    hours = parseInt(hours);
    console.log(hours);
  });

  $('.minutes').on('keyup', function() {
    minutes = this.value;
    minutes = parseInt(minutes);
    console.log(minutes);
  });

  $('.minus-hours').click(function(e) {
    e.preventDefault();
    if (hours > 1) {
      hours -= 1;
      $('.hours').val(hours);
    } else {
      hours = hours;
    }
  });

  $('.add-hours').click(function(e) {
    e.preventDefault();
    if (hours <= 11) {
      hours += 1;
      $('.hours').val(hours);
    } else {
      hours = hours;
    }
  });

  //minutes



    $('.minus-minutes').click(function(e) {
      e.preventDefault();
      if (minutes == 0) {
        minutes = 59;
        $('.minutes').val(minutes)


      } else if (minutes > 0) {
        minutes -= 1;
        moment(minutes).format("mm");
        $('.minutes').val(minutes);
      } else {
        minutes = minutes;
      }
    });

    $('.add-minutes').click(function(e) {
      e.preventDefault();
      if (minutes == 59){
        minutes = 00;
        $('.minutes').val(minutes);
      }
      else if (minutes < 59) {
        minutes += 1;
        $('.minutes').val(minutes);
      } else {
        minutes = minutes;
      }
    });

  console.log(exampleInstance.examplePrototype());
});
