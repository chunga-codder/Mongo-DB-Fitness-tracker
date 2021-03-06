# Unit 17 Nosql Homework: Workout Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Project 17 task me with building out the MVC parameters for a fitness workout logger that takes in new exercises and uses MongoDB with Mongoose to log them to the database which can then be analyzed in the app's dashboard that has multiple graphic views of the different workouts.
Completion of this app included the buidling out of the exercise model for the Mongo DB formatting to ensure the correct logging of the various fields in the application. As there are two different types of workouts avaialble, resistance and cardio, the requried fields for each of them will be the
same while there are a few fields that are only specific to the type of workout being logged.

There wern't too many difficult parts of this project and the more labor intensive parts included setting up the server, routing for API and HTML, and the model for the database.
i am very happy i had to do all this

## Demo

<img src=".\image\FitnessTrackerp17.gif">

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
    [Images](#images)
-   [Credits](#credits)
-   [License](#license)
-   [Links](#links)
-   [Contributing](#contributing)
-   [Questions](#questions)

## Installation

To install this application, first, branch the Github Repo and clone the repo to your local machine. Then, you will need to install the node dependencies which can be done by running the npm install command in your terminal/bash shell.

After the dependencies have been installed, you will need to populate your MongoDB database by uncommenting the required seed file or by running NPM Run Seed. Once filled in, you can start the server and use the program

## Usage

Once everything has been set up, the application can be launched by running the command node server.js or npm start. You will then need to visit the local host URL for the port that you have set up for this application. Once loaded in the browser, you can either click the dashboard page to view the
workout stats on the graphs provided or add/contnue a workout by clicking the buttons to add or update a new workout on the home page. When adding a new workout, ensure to click complete once you have filled everything in as if you click add exercise, then it will add a blank instance of a workout
with 0 for the numbers and no string for the title/name area.

## Images:

sample app shots and graphs

![fitness tracker](https://user-images.githubusercontent.com/71171928/108019470-9b2fe500-701a-11eb-9d6c-898024e0f8d0.PNG)
![fitness tracker 2](https://user-images.githubusercontent.com/71171928/108019482-9d923f00-701a-11eb-84b9-587474b3614d.PNG)


## Credits

This application was completed by Clinton Abumbi as a project for UCLA/Trilogy's Full Stack Software Development Bootcamp.

Dependencies for this project include the node modules:

-Express: for setting up the node server

-Mongoose for setting up the models for MongoDB

-Morgan for adding the http request logger

## License

    								MIT License

        Copyright (c) 2021 Clinton abumbi

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.

## Links:

   for my link to my sample video, che on [vedeo-demo](https://drive.google.com/file/d/1LiuXQx6RXnzKaNyf6sBTIFVfKSb9EE7Z/view)
   for this deployed application, you can fine ih [here](https://aqueous-gorge-96089.herokuapp.com/)
   
## Contributing

If you would like to contribute to this application, please feel free to email me via the email found in the questions section and we can discuss how to collaborate and enhance this application

## Questions

-   For any questions related to this applicaiton, please contact me at: clintonchunga@gmail.com.

-   Please use this link to access my Github Profile: [https://github.com/chunga-codder](https://github.com/chunga-codder)
