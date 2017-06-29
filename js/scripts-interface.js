var apiKey = require('./../.env').apiKey;


$(function() {
  $('.search-form').submit(function(e) {
    e.preventDefault();

    var searchInput = $('.search-input').val();

    $('.search-input').val('');

    $.get("http://api.brewerydb.com/v2/beers/?name=" + searchInput + "&description&key=" + apiKey, function(response) {

      // If isOrganic and IBU are undefined, display N/A
      if (JSON.stringify(response.data[0].isOrganic) === undefined) {
        response.data[0].isOrganic = "N/A";
      }
      if (JSON.stringify(response.data[0].ibu) === undefined) {
        response.data[0].ibu = "N/A";
      }

      console.log(JSON.stringify(response));
      $('.result').html(
        // Drink searched, ABV and IBU info
        "<h3>Drink searched: " + searchInput + "</h3><br>" +
        "<ul><li><strong>ABV: </strong>" + response.data[0].abv + "%</li>" +
        "<li><strong>IBU: </strong>" + response.data[0].ibu + "</li>" +
        "<li><strong>Organic: </strong>" + response.data[0].isOrganic + "</li></ul>" +


        // Drink category and description
        "<h3>Drink category: " + response.data[0].style.category.name + "</h3><br>" +
        "<p><strong>Description:</strong></p><p>" + response.data[0].style.description + "</p>" +

        // Image
        '<img src="' + response.data[0].labels.medium + '">'

        // "<li><strong>Organic: </strong>" + organicResult + "</li>"

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
