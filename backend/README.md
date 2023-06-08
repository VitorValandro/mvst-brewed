# Coffee and Tee List - MVST challenge Backend

This README explains how to run the project backend.

## Installation

**You should use Node.js v18 for running this project**

First, clone the repository into your machine. Then, install the project dependencies using npm:

```bash
$ npm install
```

## Database configuration

You can either create a docker container for the database or configure a postgres server on your own. These steps are described below:

##### Running the database with docker

```bash
$ npm run start:dev:db
```

##### Running the database configuring it by yourself.

If you don't want to use docker, you can configure this by yourself.
You need to have postgres installed and create a database with the following configuration:

```
host: 'localhost'
port: 5432
username: 'postgres'
password: '1234'
database: 'mvst-coffee-tea-challenge-db'
```

#### Setting the .env

After creating the database you have to create a `.env` file on the root of the `/backend` directory. You can just rename the file `.env.example`. After creating the file, replace all environment variables to your database credentials.

#### Migrations

There are three migrations in this project: one for creating the coffee table, other for creating the tea table and the last for seeding these tables with data. For running the migrations, run the following command:

```bash
$ npm run migration:run
```

After that the tables will be created and populated with data.

## Running the project

For running the project in dev environment, run the following command:

```
$ npm run start:dev
```

If you want to run a prodcution version, build the project first:

```
# build the project
$ npm run build

# start the app
$ npm run start:prod
```

## Running tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
