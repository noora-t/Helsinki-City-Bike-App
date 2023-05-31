# Helsinki city bike app (Dev Academy pre-assignment)
This is the pre-assignment for the Solita Dev Academy Finland 2023.

## Technologies used
* React
* MUI
* Node
* Express
* MySQL

## How to run the project

### 1. Create a database

In the backend folder, you will find the db_script.sql file. Open it and copy all of its content. Open your SQL database in the terminal and paste the content of the file. The database is ready.

### 2. Configuration

In the client/api folder you will find index.js file and in the backend folder you will find .env file. You can change these values if needed:

SERVER_URL (default is http://localhost:8800)

SERVER_PORT (default is 8800)

SERVER_HOST (default is localhost)

DATABASE_NAME (default is citybikeapp)

DATABASE_USER (the username of your database)

DATABASE_PASSWORD (the password of your database)

### 3. Install npm packages

Go into the base, client and backend folders one by one and write the following command in the console: npm i

### 4. Data

Import dumped database from: https://drive.google.com/file/d/1Kbjd57ZFofJgz7aL-H_lzVg2u_9FfbVf/view?usp=sharing

### 5. Run backend and frontend
To run both frontend and backend, go to the base city-bike-app folder and run the command: npm run dev

By default backend will be run on the http://localhost:8800/ and frontend on the http://localhost:3000/

### Front-end

<img width="300" alt="1" src="./client/images/photo1.PNG">

<img width="300" alt="2" src="./client/images/photo2.PNG">