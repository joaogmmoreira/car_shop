import {
  Model,
  model, 
  models, 
  Schema,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    const response = this.model.create({ ...car });
    return response;
  }

  public async getAll() {
    const response = this.model.find();
    return response;
  }

  public async getOne(_id: string): Promise<ICar | null> {
    const response = this.model.findOne({ _id });
    return response;
  }

  public async update(id: string, carData: ICar) {
    const response = this.model.findByIdAndUpdate(
      { _id: id },
      { ...carData },
      { new: true },
    );
    console.log(response);
    return response;   
  }
}
