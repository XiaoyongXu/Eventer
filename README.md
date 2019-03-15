# Eventer

A FULL-STACK Web app for events management system
This project was bootstrapped with Create React App.

## Setup

1. Fork & Clone
2. Run `npm install` to install dependencies.
3. Run `knex migrate:latest` to set the schema of psql databse.
4. Run `knex seed:run` to set the seed file.
5. `cd client` and run`npm install` again
6. `cd ..` to go back to the project dir
7. Run `yarn dev` to start

## Remember to include .env file
1. The .env file in the project dir should be like the following

`DB_HOST=localhost`
`DB_USER="YOUR_NAME"`
`DB_PASS="YOUR_PASSWORD"`
`DB_NAME="YOUR_DB_NAME"`
`DB_SSL=true if heroku`
`DB_PORT=5432`

2. The .env file in the client dir should be like the following

`REACT_APP_API_KEY="YOUR_API_KEY"`
`CHOKIDAR_USEPOLLING=true`
`REACT_APP_WEATHER_API_KEY="YOUR_API_KEY"`

**Screenshot of Home page**
!["Screenshot of Home"](https://github.com/XiaoyongXu/LHL-final-project/blob/master/files/Screen%20Shot%202019-03-15%20at%2012.33.51%20PM.png)

**Screenshot of Activities page**
!["Screenshot of Activities"](https://github.com/XiaoyongXu/LHL-final-project/blob/master/files/Screen%20Shot%202019-03-15%20at%2012.34.29%20PM.png)

**Screenshot of Login pag**
!["Screenshot of Login"](https://github.com/XiaoyongXu/LHL-final-project/blob/master/files/Screen%20Shot%202019-03-15%20at%2012.34.39%20PM.png)



