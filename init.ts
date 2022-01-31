import dotenv from 'dotenv';
import winston from 'winston';
import path from 'path';

dotenv.config(
    {
        // change this to your .env file path
        path: "./dev.env",
    }
);


/**
 * Expicitly define the environment variables so the typescript 
 * compiler doesn't bitch about them not being defined 
 * 
 * It has to be exported so the *global.d.ts* file can access it
*/
export const EnvironmentVariables = {
    NODE_ENV: undefined,
    LOG_LEVEL: undefined,
}

console.log(`Expected environment variables:\n   ${Object.keys(EnvironmentVariables).join("\n   ")}`);
// verify that all environment variables are defined
const missingEnvVars = Object.keys(EnvironmentVariables).filter(key => !process.env[key]);
if (missingEnvVars.length !== 0) throw new Error('\x1b[31m' + "\nMissing environment variables:\n    " + missingEnvVars.join("\n    ") + '\x1b[0m');





const logFolder = path.join(__dirname, 'logs');

// initliaze the logger
global.logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: path.join(logFolder, 'error.log'), level: 'error' }),
        new winston.transports.File({ filename: path.join(logFolder, 'http.log'), level: "http" }),
        new winston.transports.File({ filename: path.join(logFolder, 'info.log'), level: "info" }),

        new winston.transports.Console({ level: "debug", format: winston.format.simple() })

    ],

    //@ts-ignore
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.json(),


});
// prevent from reasigning the logger variable
Object.freeze(global.logger);



// do what you gotta do :)
import "./main";