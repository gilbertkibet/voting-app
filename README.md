https://www.loom.com/share/c06d6f45ae714140bc4dd2f409181124

# VotingApp

Frontend End Developer Task JamboPay

## Running the The app in Development server

Install NodeJs in your machine from `https://nodejs.org/en/`

Run`node -v` in cmd to check the version of nodejs installed

Install latest Version of Angular using npm as follows

Run `npm install -g @angular/cli@latest`

Run `ng version` to check the version of angular installed

Open cmd and Run ` git clone `to clone this repository

Navigate to Project Folder and run `npm install ` to install the required npm packages
 
Navigate To Project folder and Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Containerized Enviroment
The app is running in docker with an image called  `voting-app `  

To run the image run    `docker build  -t voting-app`

To check the image name run  `docker images`

To run the image run `docker run voting-app` .Navigate to `http://localhost:4201:80/` in your browser The application will automatically reload 


## Running unit tests

Navigate to Project folder and Run `ng test` to execute the unit tests .

## Running end-to-end tests

Navigate the Project folder and Run `ng e2e` to execute the end-to-end tests via a platform of your choice.
