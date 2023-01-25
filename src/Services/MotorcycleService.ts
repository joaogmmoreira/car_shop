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

  public async createMotorcycle(carData: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const response = await motorcycleModel.create(carData);
    const registeredCar = this.createDomain(response);

    return registeredCar;
  } 

  public async getAll() {
    const motorcycleModel = new MotorcycleModel();
    const response = await motorcycleModel.getAll();
    const carDomain = response.map((element) => {
      const car = this.createDomain(element);
      return car;
    });

    return carDomain;
  }

  public async getOne(id: string) {
    const motorcycleModel = new MotorcycleModel();
    const response = await motorcycleModel.getOne(id);
    const carDomain = this.createDomain(response);
    return carDomain;
  }

  public async updateOne(id: string, carData: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const response = await motorcycleModel.update(id, carData);
    const carDomain = this.createDomain(response);
    return carDomain;
  }
}