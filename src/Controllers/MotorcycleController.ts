import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private service: MotorcycleService;

  constructor() {
    this.service = new MotorcycleService();
  }

  public async createMotorcycle(req: Request, res: Response) {
    const carData = req.body;

    const response = await this.service.createMotorcycle(carData);

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
      return res.status(404).json({ message: 'Motorcycle not found' });
    }
    return res.status(200).json(response);
  }

  public async updateOne(req: Request, res: Response) {
    const { id } = req.params;
    const carData = req.body;
    
    const mongoIdLength = 24;

    if (id.length !== mongoIdLength) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }

    const response = await this.service.updateOne(id, carData);

    if (!response) {
      return res.status(404).json({ message: 'Motorcycle not found' });
    }

    return res.status(200).json(response);
  }
}
