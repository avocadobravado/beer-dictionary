var apiKey = require('./../.env').apiKey;


$(function() {
  $('.search-form').submit(function(e) {
    e.preventDefault();

    var searchInput = $('.search-input').val();
    var image;

    $('.search-input').val('');

    $.get("http://api.brewerydb.com/v2/beers/?name=" + searchInput + "&description&key=" + apiKey, function(response) {

      // If isOrganic and IBU are undefined, display N/A
      if (JSON.stringify(response.data[0].isOrganic) === undefined) {
        response.data[0].isOrganic = "N/A";
      }
      if (JSON.stringify(response.data[0].ibu) === undefined) {
        response.data[0].ibu = "N/A";
      }
      if (response.data[0].hasOwnProperty('labels') === false) {
        image = "Image coming soon";
      } else {
        // image = response.data[0].labels.medium;
        image = '<img src="' + response.data[0].labels.medium + '">';
      }


      console.log(JSON.stringify(response));
      $('.result').html(
        // Display Image
        image +

        // Drink searched, ABV and IBU info
        "<h3>Drink searched: " + searchInput + "</h3><br>" +
        "<ul><li><strong>ABV: </strong>" + response.data[0].abv + "%</li>" +
        "<li><strong>IBU: </strong>" + response.data[0].ibu + "</li>" +
        "<li><strong>Organic: </strong>" + response.data[0].isOrganic + "</li></ul>" +

        // Drink category and description
        "<h3>Drink category: " + response.data[0].style.category.name + "</h3><br>" +
        "<p><strong>Description:</strong></p><p>" + response.data[0].style.description + "</p>" +
        "<p><strong>ABV Range: </strong>" + response.data[0].style.abvMin + "-" + response.data[0].style.abvMax + "</p>" +
        "<p><strong>IBU Range: </strong>" + response.data[0].style.ibuMin + "-" + response.data[0].style.ibuMax + "</p>"
      );
    });
  });
});
