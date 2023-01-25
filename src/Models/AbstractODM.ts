import {
  Model,
  model, 
  models, 
  Schema,
  UpdateQuery,
} from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(data: T): Promise<T> {
    const response = this.model.create({ ...data });
    return response;
  }

  public async getAll() {
    const response = this.model.find();
    return response;
  }

  public async getOne(_id: string): Promise<T | null> {
    const response = this.model.findOne({ _id });
    return response;
  }

  public async update(id: string, data: T) {
    const response = this.model.findByIdAndUpdate(
      { _id: id },
      { ...data } as UpdateQuery<T>,
      { new: true },
    );
    return response;   
  }
}