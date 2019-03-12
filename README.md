# express-ts-starter
Skeleton TypeScript project with Express backend and React and Aurelia frontends

## Install Dependencies
This project relies on yarn to properly link the shared interfaces to both the front and backend projects
* yarn - ```npm install -g yarn```

## Installation
### Shared
Installs dependencies and builds the shared project so it can be linked by the client and server projects
`cd shared; yarn; npm run build`
### Server
Install dependencies
`cd server; yarn`
### Client
Pick the client you wish to run.  Installs dependencies
* Aurelia Client - `cd client-aurelia; yarn`
* React Client - `cd client-react; yarn`

## Running
You'll have three running processes
### Shared
Runs tsc in watch mode
`cd shared; npm run watch`
### Server
Starts a nodemon task that runs ts-node
`cd server; npm run watch`
### Client
Pick the client you wish to run.  Runs webpack in watch mode
* Aurelia Client - `cd client-aurelia; npm run watch`
* React Client - `cd client-react; npm run watch`
