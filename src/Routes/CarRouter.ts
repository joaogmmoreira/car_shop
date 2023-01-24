import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();
const carController = new CarController();

carRouter.post('/', (req, res) => { 
  carController.createCar(req, res);
});

export default carRouter;