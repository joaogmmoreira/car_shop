import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleODM';

export default class MotorcycleService {
  createDomain(car:IMotorcycle | null): Motorcycle | null {
    if (car) {
      const newCar = new Motorcycle(car);
      return newCar;
    }
    return null;
  }

  public async createMotorcycle(motorcycleData: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const response = await motorcycleModel.create(motorcycleData);
    const registeredMotorcycle = this.createDomain(response);

    return registeredMotorcycle;
  } 

  public async getAll() {
    const motorcycleModel = new MotorcycleModel();
    const response = await motorcycleModel.getAll();
    const motorcycleDomain = response.map((element) => {
      const motorcycle = this.createDomain(element);
      return motorcycle;
    });

    return motorcycleDomain;
  }

  public async getOne(id: string) {
    const motorcycleModel = new MotorcycleModel();
    const response = await motorcycleModel.getOne(id);
    const motorcycleDomain = this.createDomain(response);
    return motorcycleDomain;
  }

  public async updateOne(id: string, carData: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const response = await motorcycleModel.update(id, carData);
    const motorcycleDomain = this.createDomain(response);
    return motorcycleDomain;
  }
}