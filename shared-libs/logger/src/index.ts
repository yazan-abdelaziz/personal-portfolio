import { log } from "./services/logger.service";

export class logger {

    /**
     * Logger method for info level logs
     * @param {string} message logged string message 
     * @param {any} props any extra data needed to be logged
     */
    public info(message: string, props?: any) {
        log({level: 'info', message, props});
    }
    
    /**
     * Logger method for error level logs
     * @param {string} message logged string message
     * @param {Error} error error object
     * @param {any} props any extra data needed to be logged
     */
    public error(message: string, error: Error, props?: any) {
        log({level: 'error', message, error, props});
    }

    /**
     * Logger method for warning level logs
     * @param {string} message logged string message
     * @param {Error} error error object
     * @param {any} props any extra data needed to be logged
     */
    public warn(message: string, error?: Error, props?: any) {
        log({ level: 'warn', message, error, props })
    }

    /**
     * Logger method for access level logs
     * @param {string} message logged string message
     * @param {Error} error error object
     * @param {any} props any extra data needed to be logged
     */
     public access(message: string, error?: Error, props?: any) {
        log({ level: 'access', message, error, props })
    }

    /**
     * Logger method for debug level logs
     * @param {string} message logged string message
     * @param {Error} error error object
     * @param {any} props any extra data needed to be logged
     */
     public debug(message: string, error?: Error, props?: any) {
        log({ level: 'debug', message, error, props })
    }

    /**
     * Logger method for system level logs
     * @param {string} message logged string message
     * @param {Error} error error object
     * @param {any} props any extra data needed to be logged
     */
     public system(message: string, error?: Error, props?: any) {
        log({ level: 'system', message, error, props })
    }

    /**
     * Logger method for database level logs
     * @param {string} message logged string message
     * @param {Error} error error object
     * @param {any} props any extra data needed to be logged
     */
     public database(message: string, error?: Error, props?: any) {
        log({ level: 'database', message, error, props })
    }

    /**
     * Logger method for event level logs
     * @param {string} message logged string message
     * @param {Error} error error object
     * @param {any} props any extra data needed to be logged
     */
     public event(message: string, error?: Error, props?: any) {
        log({ level: 'event', message, error, props })
    }

    /**
     * Logger method for fatal level logs
     * @param {string} message logged string message
     * @param {Error} error error object
     * @param {any} props any extra data needed to be logged
     */
     public fatal(message: string, error?: Error, props?: any) {
        log({ level: 'fatal', message, error, props })
    }
}
