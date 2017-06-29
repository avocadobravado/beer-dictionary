var apiKey = require('./../.env').apiKey;

var Beer = function() {
};

Beer.prototype.getAbv = function(searchInput, name, abv, ibu, organic, category, description, abvMin, abvMax) {
  $.get("http://api.brewerydb.com/v2/beers/?name=" + searchInput + "&description&key=" + apiKey).then(function(response) {

    //////////////////////////////////////////
    // If isOrganic is undefined, display N/A
    //////////////////////////////////////////

    if (JSON.stringify(response.data[0].isOrganic) === undefined) {
      response.data[0].isOrganic = "N/A";
    }

    //  If IBU is undefined, display N/A
    if (JSON.stringify(response.data[0].ibu) === undefined) {
      response.data[0].ibu = "N/A";
    }

    // If no image, display 'Image coming soon'
    // if (response.data[0].hasOwnProperty('labels') === false) {
    //   photo = "Image coming soon";
    // } else {
    //   // image = response.data[0].labels.medium;
    //   photo = '<img src="' + response.data[0].labels.medium + '">';
    // }

    //////////////////////////////////////////
    // Gather info from API
    //////////////////////////////////////////
      name(response.data[0].name);
      abv(response.data[0].abv);
      ibu(response.data[0].ibu);
      organic(response.data[0].isOrganic);
      category(response.data[0].style.category.name);
      description(response.data[0].style.description);
  });
};

  //   console.log(JSON.stringify(response));

exports.beerModule = Beer;
