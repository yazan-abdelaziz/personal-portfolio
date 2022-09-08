import express, { Request, Response } from 'express';
import { logger } from 'yabd-personal-protfolio-logger';
import { healthCheck } from '../services/health-check.service';

const logi = new logger();
const router = express.Router();

router.all('/health-check', async (req: Request, res: Response) => {
    try {
        res.send(healthCheck());
    } catch (error: any) {
        logi.error('AuthorizationService -> healthCheck | error retreiving health check value', error);
    }
});

export { router as HealthCheckRouter };