import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import CarService from '../../../../src/Services/CarService';

const carToCreate = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const createdCar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carToUpdate = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const updatedCar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2004,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const getAllResponse = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: true,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

describe('Testa o service de car', function () {
  it('se cria um carro corretamente', async function () {
    sinon.stub(Model, 'create').resolves(createdCar);
    const carService = new CarService();
    const response = await carService.createCar(carToCreate);

    expect(response).to.deep.equal(createdCar);
    sinon.restore();
  });
  it('se pega todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(getAllResponse);
    const carService = new CarService();
    const response = await carService.getAll();

    expect(response).to.deep.equal(getAllResponse);
    sinon.restore();
  });
  it('se acha um carro pelo id', async function () {
    sinon.stub(Model, 'findOne').resolves(createdCar);
    const carService = new CarService();
    const response = await carService.getOne('6348513f34c397abcad040b2');

    expect(response).to.deep.equal(createdCar);
    sinon.restore();
  });
  it('se atualiza um carro corretamente', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);
    const carService = new CarService();
    const response = await carService.updateOne('6348513f34c397abcad040b2', carToUpdate);

    expect(response).to.deep.equal(updatedCar);
    sinon.restore();
  });
});