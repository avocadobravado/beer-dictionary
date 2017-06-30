# Beeripedia, a beer encyclopedia

#### Week 1 Project - JavaScript

#### By **Rose Sponseller and Connor Larsen, June 29, 2017**

### Description

Built with a mobile-first approach, this website uses the Brewery DB (https://www.brewerydb.com) API to allow users to search for thousands of beers and learn more about them. The website searches will return the ABV (Alcohol by Volume) IBU (International Bitterness Units) of the searched beer and a description of the beer's category.

### Screenshot of website

![screenshot of project](https://github.com/avocadobravado/beer-dictionary/blob/master/img/scs.png?raw=true)

### Installation

1) Open your terminal and clone this repository by typing:

```
$ git clone https://github.com/avocadobravado/beer-dictionary
```

2) Move into the cloned repository by typing:

```
$ cd beer-dictionary
```

3) In the top level of the project's directory, create a hidden file for your API key

```
$ beer-dictionary/touch .env
```

4) Create an account with Brewery DB to retrieve your own free API key

```
http://www.brewerydb.com/developers
```

5) Add the API key to your .env file:

```
exports.apiKey = 'your unique key HERE';
```

6) Add .env to your .gulpignore file:

```
bower_components/
node_modules/
.DS_Store
build/
tmp/
.env
```  

7) Install npm and Bower by typing:

```
$ npm install
$ bower install
```

8) Initialize npm and Bower:

```
$ npm init
$ bower init
```

9) Run gulp:

```
$ gulp build
```

10) Start the server:

```
$ gulp serve
```

11) Step 10 should immediately open up a web browser such as Google Chrome and take you to the site, but if not, visit the following address in your preferred browser:

```
localhost:3000
```

## Built With

* HTML
* CSS
* Sass
* Brewery DB API
* JavaScript
* jQuery
* Sketch

## Known Bugs

* Nothing will display if there is no match to what the user has inputted

## Support and contact details

* Feel free to reach out with suggestions at rosesponseller@gmail.com

## License

This project is licensed under the MIT License

**_Rose Sponseller and Connor Larsen_** Copyright (c) 2017
