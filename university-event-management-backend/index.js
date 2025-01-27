import express from 'express';
import dotenv from 'dotenv';
import enums from './constant/enums.js';
import dbConnection from './database/dbConnection.js';
import cors from 'cors';
import eventRoute from './routes/eventRoutes.js';

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.use('/', eventRoute);

app.get('/', (req, res) => {
    try {
        res.status(200).send({ status: 200, message: enums.SUCCESS_ON_SERVER_CONNECTION });
    } catch (error) {
        res.status(502).send({ status: 502, message: enums.FAILED_ON_SERVER_CONNECTION });
    }
});

dbConnection();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Or API is running on port ${PORT}`);
    
});