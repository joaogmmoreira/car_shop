import express from 'express';
import carRouter from './Routes/CarRouter';
import motorcycleRouter from './Routes/MotorcycleRouter';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);

export default app;
