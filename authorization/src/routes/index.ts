import express from 'express';
import { HealthCheckRouter } from './health-check';

const router = express.Router();

// define all other routes
router.use(HealthCheckRouter);

export { router };