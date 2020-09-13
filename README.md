# First Impression - The Resume Builder Web Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
A resume builder web app that takes the hassle out of resume writing. It lets the user register on website, login and choose resume template list. After choosing template, the user can follow easy prompts to create the perfect job-ready resume effortlessly. It also offers to edit and save resume moreover download a pdf copy for their own record.

## Project Glimpse

### Home Page

!["Home Page"](https://github.com/Nidz01/Resume_Builder_App/blob/master/docs/Home.png?raw=true)

### Registration

!["Registration"](https://github.com/Nidz01/Resume_Builder_App/blob/master/docs/Registration.gif?raw=true)

### Login

!["Login"](https://github.com/Nidz01/Resume_Builder_App/blob/master/docs/Login.gif?raw=true)

### Template Selection

!["Template Selection "](https://github.com/Nidz01/Resume_Builder_App/blob/master/docs/Template.gif?raw=true)

### Create Resume

!["Create Resume"](https://github.com/Nidz01/Resume_Builder_App/blob/master/docs/Create_Resume.gif?raw=true)

### Pdf Resume

!["Pdf Resume"](https://github.com/Nidz01/Resume_Builder_App/blob/master/docs/pdf_Resume.gif?raw=true)

## Features
Login/Registration
Minimal Design
Create/Edit/Delete Your Resume
User Profile

## Dependencies
Following is the list of both client side and backend dependencies.

### Client Side Dependencies
  - axios
  - classnames
  - normalize.css
  - react
  - react-pdf/renderer
  - body-parser
  - react-bootstrap
  - react-dom
  - react-router-dom
  - universal-cookie

### Backend Dependencies
  - bcryptjs
  - cookie-parser
  - debug
  - ejs
  - express
  - http-errors
  - morgan
  - pg

## Project Setup
Navigate the current working directory to : cd dir.
The project has 2 main folders:

 - client (React Front-End)
 - backend (Express Back-End)

  Run npm install in both folders to install the dependencies.

### Frontend Setup
Install the all frontend dependencies using npm: npm install.
Run the client using this command on terminal: npm start.

Client will automatically open [http://localhost:3030](http://localhost:3002) to view app, in the browser.

### Backend Setup

You will need to set up your database to fully enjoy this app.
#### Create Databse:
- create a postgres database. At the terminal, type the following:

  `createdb database_name -O username`

  replace database_name with your database name and username with your own user.

- create a `.env` file with your database settings. Look at .env.example for usage.


- Modify the sql scripts under `db/schema/` to create the tables and seed the data.

- run `npm run reset` that will run the reset scripts in package.json to reset the database. Modify the reset script in package.json accordingly:

```json
"scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www",
    "reset": "psql -U development -d resume_builder < ./db/schema/create.sql && psql -U development -d resume_builder < ./db/schema/seed.sql"
  },
```
- replace `development` with your own username and `resume_builder` with your database name


Install the all backend dependencies using npm: npm install.
Run the server using this command on terminal: npm start.

Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

## Creating The First Resume
Make sure that both Backend and Frontend Servers are running.
YOU should be on localhost [http://localhost:3030](http://localhost:3002) in the browser.
On home page, click Register in the top navigation bar incase if you are not registered.
If you are already registered then click Login and enter your username and password.


