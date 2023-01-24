import { Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private service: CarService;

  constructor() {
    this.service = new CarService();
  }

  public async createCar(req: Request, res: Response) {
    const carData = req.body;

    const response = await this.service.createCar(carData);

    return res.status(201).json(response);
  }
}
