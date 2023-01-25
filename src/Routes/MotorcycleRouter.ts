import { Router } from 'express';
// import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = Router();
const motorcycleController = new MotorcycleController();

motorcycleRouter.post('/', (req, res) => { 
  motorcycleController.createMotorcycle(req, res);
});

motorcycleRouter.get('/', (req, res) => {
  motorcycleController.getAll(req, res);
});

motorcycleRouter.get('/:id', (req, res) => {
  motorcycleController.getOne(req, res);
});

motorcycleRouter.put('/:id', (req, res) => {
  motorcycleController.updateOne(req, res);
});

export default motorcycleRouter;