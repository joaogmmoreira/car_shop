import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarODM';

export default class CarService {
  createDomain(car:ICar | null): Car | null {
    if (car) {
      const newCar = new Car(car);
      return newCar;
    }
    return null;
  }

  public async createCar(carData: ICar) {
    const carModel = new CarModel();
    const response = await carModel.create(carData);
    const registeredCar = this.createDomain(response);

    return registeredCar;
  } 

  public async getAll() {
    const carModel = new CarModel();
    const response = await carModel.getAll();
    const carDomain = response.map((element) => {
      const car = this.createDomain(element);
      return car;
    });

    return carDomain;
  }

  public async getOne(id: string) {
    const carModel = new CarModel();
    const response = await carModel.getOne(id);
    const carDomain = this.createDomain(response);
    return carDomain;
  }
}