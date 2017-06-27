var ExampleModule = require('./../js/scripts.js').exampleModule;

$(document).ready(function() {
  var hours = parseInt($('.hours').val());
  var minutes = parseInt($('.minutes').val());

  var now = $('#current-time').text(moment());


  console.log(now);

  $('.hours').on('keyup', function() {
    hours = this.value;
    hours = parseInt(hours);
  });

  $('.minutes').on('keyup', function() {
    minutes = this.value;
    minutes = parseInt(minutes);
  });

  $('.minus-hours').click(function(e) {
    e.preventDefault();
    if (hours > 0) {
      hours -= 1;
    } else {
      hours = hours;
    }
    $('.hours').val(hours);
    console.log(hours);
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
        if (minutes >= 0 && minutes <= 9) {
          minutes = "0" + minutes;
          console.log(minutes);
        } else {
          minutes = minutes;
        }
        $('.minutes').val(minutes);
      } else {
        minutes = minutes;
      }
    });

    $('.add-minutes').click(function(e) {
      e.preventDefault();
      minutes = parseInt(minutes);
      if (minutes == 59) {
        minutes = 00;
        if (minutes == 0) {
          minutes = "0" + minutes;
        } else {
          minutes = minutes;
        }
        $('.minutes').val(minutes);
      } else if (minutes < 59) {
        minutes += 1;
        if (minutes >= 0 && minutes <= 9) {
          minutes = "0" + minutes;
          console.log(minutes);
          $('.minutes').val(minutes);
        } else {
          minutes = minutes;
          $('.minutes').val(minutes);
        }
      } else {
        minutes = minutes;
      }
    });

    $(".alarm").submit(function(e){
      e.preventDefault();
      if (minutes == 0) {
        minutes = "0" + minutes;
      } else {
        minutes = minutes;
      }
      // if ($('.onoffswitch-checkbox').is(':checked')) {
        $(".alarm-display").text(hours + " hours and " + minutes + " minutes long");
      // } else {
      //   $(".alarm-display").text(hours + ":" + minutes + " AM");
      // }
      var b = moment().add(hours, 'h').add(minutes, 'm').format("h:mm A");
      $(".alarm-set").text(b);
    });


    if (now == b) {
      alert("yay alarm!!");
    }


  // console.log(exampleInstance.examplePrototype());
});
