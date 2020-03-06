# Wizeline BackEnd Challenge.

## How to install newman using node globally
```sh
$ npm install -g newman
```

## Command to run the actual collection locally
```sh
$ newman run path/nameOfCollection.json
```
## How can you execute this collection in dockers?
* First: You need to have dockers installed
* Second: You need to pull the newman docker image using the following command.
```sh
$ docker pull postman/newman;
```
* Third: You need to publich your collection using the postman IDE.
  * You need to click on the 3 dots menu for the collection.
  * Click on the Share Collection button.
  * Click on the Get Publick link tab.
  * Click on the Get Publick link button.
  * Copy the url generated.

* Then, once the newman image is downloaded you can use the following command.
```sh
$ docker run -t postman/newman run "Here you will paste the url of the url generated with postman"
```
