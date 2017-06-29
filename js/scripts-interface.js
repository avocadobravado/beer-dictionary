var Beer = require('./../js/scripts.js').beerModule;

var name = function(name) {
  $('.result').before("<p><strong>Name: " + name + "</strong></p>");
};

var abv = function(abv) {
  $('.result').before("<p><strong>ABV: </strong>" + abv + "%</p>");
};

var ibu = function(ibu) {
  $('.result').before("<p><strong>IBU: </strong>" + ibu + "</p>");
};

var organic = function(organic) {
  $('.result').before("<p><strong>Organic: </strong>" + organic + "</p>");
};

var category = function(category) {
  $('.result').before("<h3>Drink category: " + category + "</h3><br>");
};

var description = function(description) {
  $('.result').before("<p><strong>Description:</strong></p><p>" + description + "</p>");
};

var abvMin = function(abvMin) {
  $('.result').before("<p><strong>ABV Range: </strong>" + abvMin + "-");
};

var abvMax = function(abvMax) {
  $('.result').before(abvMax + "</p>");
};

$(function() {

  var newBeer = new Beer();
  var searchInput;

  $('.search-form').submit(function(e) {
    e.preventDefault();
    searchInput = $('.search-input').val();
    $('.search-input').val('');

    newBeer.getAbv(searchInput, name, abv, ibu, organic, category, description);
    console.log(searchInput);

  });
});
