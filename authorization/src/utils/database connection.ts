import mongoose from 'mongoose';
import { logger } from 'yabd-personal-protfolio-logger';

const logi = new logger();

export default async function connectToServiceDb() {
    const dbUrl = ''; // TODO: add to config 

    try {
        logi.info('Establishing connection to database');
        mongoose.connect(dbUrl);
        logi.info('connected to database!');
    } catch (error: any) {
        logi.error('error connecting to the database', error);
    }
}