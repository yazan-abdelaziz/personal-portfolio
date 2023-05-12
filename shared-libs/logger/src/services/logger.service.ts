import path from 'path';
import chalk from 'chalk';
import moment from 'moment';
// import { existsSync, mkdirSync, appendFileSync, createReadStream } from 'fs';
import readline from 'readline';
import { LogOptions } from '../contracts/log-options';
import config from '../config/log-config';

/**
 * Main Logging Function
 * @param {object} options 
 * OBJECT: { level, message, error }
 */
 export const log = (options: LogOptions) => {
    const levelName = getLogLevelName(options.level);
    let message = options.message ?? 'Undefined Message';
    const error = options.error ?? undefined;
    const props = options.props ?? undefined;

    // always write to the console
    writeToConsole(levelName, message, error, props);

    // log to a file in case logger config are configured to do so
    // TODO: configure to log to a file or a cloude service
}

/**
 * Write Formated Message to the Console
 * @param {string} levelName Log Level Name
 * @param {string} message Log message
 * @param {Error} error Error if any
 * @param {any} props Any other data needed to be logged
 */
const writeToConsole = (levelName: string, message?: string, error?: Error, props?: any) => {
    type levelKey = keyof typeof config.levels;
    const level = config.levels[levelName as levelKey];
    let colorFunction: any;

    // handle color function
    if (Array.isArray(level.color)) {
        if (level.color.length === 3) {
            colorFunction = chalk.rgb(level.color[0], level.color[1], level.color[2]) as any;
        } else {
            throw new Error(
                `an error in the configuration of the logger level ${chalk.red(`${levelName.toUpperCase()}`)} is set for RGP
                but only has ${chalk.red(level.color.length)} values.
                \nthe configuration must be an ${chalk.red('array')} and contain ${chalk.red('3')} values.`
            );
        }
    } if (typeof level.color === 'string' && level.color.includes('#')) {
        colorFunction = chalk.hex(level.color) as any;
    } else {
        type chalkColorKey = keyof typeof chalk;
        colorFunction = chalk[level.color as chalkColorKey] as any;
    }

    const formatedMessage = getFormatedMessage(levelName, message, error);
    console.log(`${colorFunction(formatedMessage)}\n${props ?? ''}`);
}


/**
 * Get Logged Formated Message
 * @param {string} levelName log level name
 * @param {string} message user message
 * @param {Error} error error if any
 * @returns Logged Formated Message
 */
const getFormatedMessage = (levelName: string, message?: string, error?: Error) => {
    return `[${levelName.toUpperCase()}][${getFormatedCurrentDate()}]: ${message} --- \n${error ? `error: ${error.message} - stack: ${error.stack}`: ''}`;
}

/**
 * To get formated data as a timestamp
 * @returns formated Date
 */
const getFormatedCurrentDate = () => {
    return moment(new Date()).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
}

/**
 * validate log Level Name
 * @param {string} levelName 
 * @returns levelName if exists otherwise returns info as a levelName
 */
const getLogLevelName = (levelName?: string) => {
    return levelName && config.levels.hasOwnProperty(levelName) ? levelName : 'info';
}