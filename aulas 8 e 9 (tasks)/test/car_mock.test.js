const Cars = require('../src/application/car_service');
const Constants = require('../src/utils/Constants');
const Utils = require('../src/utils/utils');
const CarsRepository = require('../src/port/car_repository');

jest.mock('../src/port/car_repository');

it('should create a car', async () => {
    const data = {
        placa: 'HTK1634',
        marca: 'Ford',
        nome: 'Mustang GT',
        ano: 2018,
        km: 18556,
    };

    const id = Utils.generateUuid();

    CarsRepository.create.mockResolvedValue({ ...data, id });

    const response = await Cars.create(data);

    expect(response).toEqual({ ...data, id });
});

it('should not create a car', async () => {
    const data = {
        marca: 'Ford',
        nome: 'Mustang GT',
        ano: 2018,
        km: 18556,
    };

    const response = await Cars.create(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should update a car', async () => {
    const data = {
        id: Utils.generateUuid(),
        placa: 'HTK1634',
        km: 30545,
    };

    CarsRepository.update.mockResolvedValue(data);

    const response = await Cars.update(data);

    expect(response).toEqual(data);
});

it('should not update a car', async () => {
    const data = {
        id: Utils.generateUuid(),
        nome: 'Mustang GT',
        km: 30545,
    };

    const response = await Cars.update(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should delete a car', async () => {
    const data = {
        placa: 'HTK1634',
    };

    CarsRepository.deleteByPlaca.mockResolvedValue(data);

    const response = await Cars.deleteByPlaca(data);

    expect(response).toEqual(data);
});

it('should not delete a car', async () => {
    const data = {
        nome: 'Mustang GT',
    };

    const response = await Cars.deleteByPlaca(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should get all cars', async () => {
    const data = [
        {
            placa: 'HTK1634',
        },
        {
            placa: 'JDU9479',
        },
    ];

    CarsRepository.list.mockResolvedValue(data);

    const response = await Cars.list();

    expect(response).toEqual(data);
});

it('should not get all cars', async () => {
    const data = [
        {
            nome: 'Mustang GT',
        },
        {
            nome: 'Ferrari 488',
        },
    ];

    const response = await Cars.list(data);

    expect(response.placa).toEqual(Constants.ErrorValidation.placa);
});

it('should get car by placa', async () => {
    const data = {
        placa: 'HTK1634',
    };

    CarsRepository.getByPlaca.mockResolvedValue(data);

    const response = await Cars.listByPlaca(data);

    expect(response).toEqual(data);
});

it('should not get car by placa', async () => {
    const data = {
        nome: 'Mustang GT',
    };

    const response = await Cars.listByPlaca(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});
