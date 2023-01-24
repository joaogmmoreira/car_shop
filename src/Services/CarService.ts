import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarODM';

export default class CarService {
  createDomain(car:ICar) {
    const newCar = new Car(car);
    return newCar;
  }

  public async createCar(carData: ICar): Promise<ICar> {
    const carModel = new CarModel();
    const response = await carModel.create(carData);
    const registeredCar = this.createCar(response);

    return registeredCar;
  } 
}