# mysql-database

## Link Demo
https://drive.google.com/drive/folders/1gSG6ELhtbhtNRmTyrM9N69cv1rgtOA8v?usp=share_link

## IMPORTANT NOTE
Make sure to configure your database in config.json after installing package (npm install)

You can only register an admin using Postman with the endpoint /registeradmin

## Installation

Install using npm

```bash
  cd server
  npm install
  npm migratingdatabase
```

## Before Running Server 
Add new file in server directory with with filename '.env' (without qoute and with dot), then write JWT_SECRET=WriteWhateverSecretYouLike in the .env file and save it.

Install nodemon if you haven't installed it using the command below
```bash
npm install nodemon -g
```

Running the Server

```bash
nodemon app
```

Running the Frontend
```bash
 cd frontend
 npm start
```