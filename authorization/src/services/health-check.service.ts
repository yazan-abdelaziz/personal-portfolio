import { logger } from 'yabd-personal-protfolio-logger';
import { IHealthCheck } from '../contracts/interfaces/health-check.interface';

const logi = new logger();

/**
 * retrives the health check data
 * @returns health check result
 */
export function healthCheck() {
    logi.info('health check have been called!');
    return {
        uptime: process.uptime(),
        responseTime: process.hrtime(),
        message: 'ok',
        timestamp: Date.now()
    } as IHealthCheck;
}