var ExampleModule = require('./../js/scripts.js').exampleModule;


$(document).ready(function() {
  var hours = parseInt($('.hours').val());
  var minutes = parseInt($('.minutes').val());

  $('#current-time').text(moment().format("h:mm A"));

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
      if (minutes > 0) {
        minutes -= 1;
        $('.minutes').val(minutes);
      } else {
        minutes = minutes;
      }
    });

    $('.add-minutes').click(function(e) {
      e.preventDefault();
      if (minutes <= 59) {
        minutes += 1;
        $('.minutes').val(minutes);
      } else {
        minutes = minutes;
      }
    });

  console.log(exampleInstance.examplePrototype());
});
