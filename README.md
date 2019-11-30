# Photo browser
This angular web application demonstrates photo gallery which uses lazy loading. Photos are downloaded from http://jsonplaceholder.typicode.com/photos.

**You can access to live demo app at: https://photo-browser-else.herokuapp.com/**

## Prerequisites
* [Git](http://git-scm.com/)
* [Angular CLI](https://cli.angular.io/)
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Installation
* `git clone https://github.com/eelseee/photo-browser.git <your-project-name>`
* `cd <your-project-name>`
* `npm install`

## Running
### Running locally
* `ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200)
  * This should be similar to my [Heroku site](https://photo-browser-else.herokuapp.com/)

### Deploying to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

**OR**

* Install [Homebrew](https://brew.sh/)
* `brew install heroku`
* `heroku create <your-project-name>`
* `git push heroku master`
* `heroku open`
