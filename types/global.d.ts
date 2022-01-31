import winston from 'winston';
import { EnvironmentVariables } from '../init';




type EnvironmentVariablesInterface = { [key in (keyof typeof EnvironmentVariables)]: string };

declare global {
    var logger: winston.Logger;
    namespace NodeJS {
        interface Global {

        }
        interface ProcessEnv extends EnvironmentVariablesInterface { }
    }
}
export { }
