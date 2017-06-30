# Beeripedia, a beer encyclopedia

#### Week 1 Project - JavaScript

#### By **Rose Sponseller and Connor Larsen, June 29, 2017**

### Description

Built with a mobile-first approach, this website uses the Brewery DB API to allow users to search for thousands of beers and learn more about different beers.

### Screenshot of website

![screenshot of project](https://github.com/avocadobravado/beer-dictionary/blob/master/img/scs.png?raw=true)

### Setup/Installation

1) Open your terminal and clone this repository by typing:

```
$ git clone https://github.com/avocadobravado/beer-dictionary
```

2) Move into the cloned repository by typing:

```
$ cd dir/beer-dictionary
```

3) In the top level of the project's directory, create two hidden files -- an .env file for your API key and a .gitignore file

```
$ beer-dictionary/touch .gitignore
$ beer-dictionary/touch .env
```

4) Create an account with Brewery DB to retrieve your own free API key

```
visit http://www.brewerydb.com/developers
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

## Built With

* HTML
* CSS
* Sass
* Brewery DB API
* JavaScript
* jQuery

## Known Bugs

* Unknown, but let us know

## Support and contact details

* Feel free to reach out with suggestions at rosesponseller@gmail.com

## License

This project is licensed under the MIT License

**_Rose Sponseller and Connor Larsen_** Copyright (c) 2017
