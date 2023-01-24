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

  public async getAll(_req: Request, res: Response) {
    const response = await this.service.getAll();

    return res.status(200).json(response);
  }

  public async getOne(req: Request, res: Response) {
    const { id } = req.params;

    const mongoIdLength = 24;

    if (id.length !== mongoIdLength) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    const response = await this.service.getOne(id);

    if (!response) {
      return res.status(404).json({ message: 'Car not found' });
    }
    return res.status(200).json(response);
  }
}
