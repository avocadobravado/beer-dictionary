var apiKey = require('./../.env').apiKey;


$(function() {
  $('.search-form').submit(function(e) {
    e.preventDefault();

    var searchInput = $('.search-input').val();
    var organicResult;

    $('.search-input').val('');

    $.get("http://api.brewerydb.com/v2/beers/?name=" + searchInput + "&description&key=" + apiKey, function(response) {

      // function organic() {
      //   if (JSON.stringify(response.data[0].isOrganic) === true) {
      //     organicResult = "Yes";
      //   } else {
      //     organicResult = "No";
      //   }
      // };

      console.log(JSON.stringify(response));
      $('.result').html(
        "<h3>Drink searched: " + searchInput + "</h3><br>" +
        "<ul><li><strong>ABV: </strong>" + (JSON.parse(response.data[0].abv)) + "%</li>" +
        "<li><strong>IBU: </strong>" + (JSON.parse(response.data[0].ibu)) + "</li></ul>" +
        // "<li><strong>Organic: </strong>" + organicResult + "</li>"
        "<h3>Drink category: " + searchInput + "</h3><br>"

        // (JSON.stringify(response.data[0].isOrganic)) + "</li></ul>"
        // organic
        // (JSON.stringify(response.data[0].style.description))
        // + "<br>" +
        // (JSON.stringify(response.data[0].style.id))

      );
    });
  });
});

// (JSON.parse(response.data[0].ibu))
// "</li><br><li><strong>Organic: </strong>" +
// (JSON.parse(response.data[0].isOrganic))
// (JSON.parse(response.data[0].style.description))
// + "<br>" +
// (JSON.stringify(response.data[0].style.id))
