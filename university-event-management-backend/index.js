import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import enums from './constant/enums.js';
import eventRoute from './routes/eventRoutes.js';
import dbConnection from './database/dbConnection.js';
import eventAppRoute from './routes/eventAppRoutes.js';
import studentRegisterRoute from './routes/studentRegisterRoute.js';

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.use('/', eventRoute);

app.use('/', eventAppRoute);

app.use('/', studentRegisterRoute);

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