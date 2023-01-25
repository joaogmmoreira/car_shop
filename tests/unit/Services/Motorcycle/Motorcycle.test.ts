import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

const MOTO = 'Honda Cbr 1000rr';

const motorcycleToCreate = {
  model: MOTO,
  year: 2011,
  color: 'Orange',
  status: true,
  buyValue: 59.900,
  category: 'Street',
  engineCapacity: 1000,
};

const createdMotorcycle = {
  id: '634852326b35b59438fbea31',
  model: MOTO,
  year: 2011,
  color: 'Orange',
  status: true,
  buyValue: 59.900,
  category: 'Street',
  engineCapacity: 1000,
};

const getAllResponse = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: MOTO,
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

const motorcycleToUpdate = {
  id: '634852326b35b59438fbea31',
  model: MOTO,
  year: 2011,
  color: 'Orange',
  status: true,
  buyValue: 59.900,
  category: 'Street',
  engineCapacity: 1000,
};

const updatedMotorcycle = {
  id: '634852326b35b59438fbea31',
  model: MOTO,
  year: 2011,
  color: 'Orange',
  status: true,
  buyValue: 59.900,
  category: 'Street',
  engineCapacity: 1000,
};

describe('Testa o service de motorcycle', function () {
  it('se cria uma moto corretamente', async function () {
    sinon.stub(Model, 'create').resolves(createdMotorcycle);
    const motorcycleService = new MotorcycleService();
    const response = await motorcycleService.createMotorcycle(motorcycleToCreate);

    expect(response).to.deep.equal(createdMotorcycle);
    sinon.restore();
  });
  it('se pega todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(getAllResponse);
    const motorcycleService = new MotorcycleService();
    const response = await motorcycleService.getAll();

    expect(response).to.deep.equal(getAllResponse);
    sinon.restore();
  });
  it('se acha um carro pelo id', async function () {
    sinon.stub(Model, 'findOne').resolves(createdMotorcycle);
    const motorcycleService = new MotorcycleService();
    const response = await motorcycleService.getOne('6348513f34c397abcad040b2');

    expect(response).to.deep.equal(createdMotorcycle);
    sinon.restore();
  });
  it('se atualiza um carro corretamente', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMotorcycle);
    const motorcycleService = new MotorcycleService();
    const response = await motorcycleService
      .updateOne('6348513f34c397abcad040b2', motorcycleToUpdate);

    expect(response).to.deep.equal(updatedMotorcycle);
    sinon.restore();
  });
});