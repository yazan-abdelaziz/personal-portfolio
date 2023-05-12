import express from 'express';
import { logger } from 'yabd-personal-protfolio-logger';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swagger';
import swaggerJsDoc from 'swagger-jsdoc';
import connectToServiceDb from './utils/database connection';

const logi = new logger();

const app = express();

// swagger setup
const swaggerSpec = swaggerJsDoc(swaggerDocument)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// define the main router
app.use('/authorization', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    logi.info(`start lestining for port ${PORT}`, PORT);

    // connect to the db
    await connectToServiceDb();
});
