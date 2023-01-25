import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRouter = Router();
const carController = new CarController();

carRouter.post('/', (req, res) => { 
  carController.createCar(req, res);
});

carRouter.get('/', (req, res) => {
  carController.getAll(req, res);
});

carRouter.get('/:id', (req, res) => {
  carController.getOne(req, res);
});

carRouter.put('/:id', (req, res) => {
  carController.updateOne(req, res);
});

export default carRouter;
