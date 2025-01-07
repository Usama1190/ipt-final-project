import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.get('/', ( req, res) => {
    try {
        res.status(200).send({ status: 200, message: '' });
    } catch (error) {
        res.status(404).send({ status: 404, message: 'Not Found'})
    }
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}.`);
    
})