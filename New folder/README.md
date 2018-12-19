# Meme Generator

This web app is simply a meme generator. Once you create an account, you will have access to the generate button which then queries a database with over 3000 high quality memes taken from a Kaggle dataset (Top 10,000 Memes from Reddit). Once the query is completed you will be redirected to the address of meme itself so you can either laugh histerically, share with your friends, or download for safe keeping. Due to the innapropriate nature of some of these memes from this dataset, we have created a check box to indicate what memes you would like to see, PG or PG-13.  

### About

This app was developed by Not Monday, a software development team at CU Boulder's CSCI 3308-Software Developement Methods and Tools Course which consists of memebers Nicholas Auer, Chandler de Spirlet, Josh Meyer, Milan Formanek, Owen Loeb, and Kyle Murphy. 

### Use

Simply visit [notmonday.herokuapp](https://notmonday.herokuapp.com/) and create an account to get started, and prepare to start LOL and ROFL.

### Repository Structure

The main repo constains two folders and a batch of files. The first folder, node_modules, is the imported files for the node js modules, the second, public, contains all of the html/css and image files used through out the pages of the site.

The remaining files in the main folder contains all the code to initialize the web node and the database, as well as all the underlying methods within the main.js file. The automatically generated package-lock.json files are also stored here also.
 
### How to Build/Run/Test

1. If you dont already have a Heroku App setup, visit Heroku.com and link a copy of this repository to the app that you have created. Also fork and clone this repo onto your own machine. 
2. Set up a postgres database within Heroku, and connect to it using PGAdmin using all the credentials provided on the Heroku site, then load all the tables used in the main.js file with the correct table names and attributes.
3. Load the urls of the memes you would like to see generated, Kaggle.com is a great dataset website that constains huge lists of memes.
4. Navigate into the folder where the repo is cloned, download the Heroku CLI, sign in into Heroku, git init, and now you can start testing. You can push to the git repo and the Heroku CLI by these following commands, git add . , git commit -am "your commit" ,  git push heroku master.
5. You can now refresh the page 'your heroku app name'.herokuapp.com and review your changes.

### CI System Link

[NotMonday Travis CI Link](https://travis-ci.org/mformanek/SDPApp)
