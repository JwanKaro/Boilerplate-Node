# Basic Boilerplate Node.js with TypeScript
This boilerplate will make your life a bit easier with NodeJS projects. Nobody really uses JavaScript that much because TypeScript gives you features, that JavaScript lacks. Like Types and enums etc. 
# What it's made of?

1. Node.js: The server side of the project.
1. TypeScript: A superset of JavaScript
1. Winston: for logging errors, info, etc.
1. Nodemon: restarts the server when a file changes
1. DotEnv: To load environment variables from a .env file

# How to run it?

Just clone or download this and run `npm install` and `npm start`. 
There are a couple of scripts in the package.json file.
+ `npm start` : This will start the server.
+ `npm run dev` : This will start the server with Nodemon and watch for changes.
+ `npm run build` : This will build the project for production.

## What to do?
You might want to change the `DotEnv` configuration and the required Env variables in the `init.ts` file, as it will be validated by the server. If a required variable is not set, the server will throw an error with the missing variables.

## How to use it?

Just code in the `main.ts` file. That's it.  
