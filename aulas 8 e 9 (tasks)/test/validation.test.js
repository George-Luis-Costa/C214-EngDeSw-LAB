const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        placa: 'ABC1234',
        marca: 'Audi',
        nome: "RSQ8",
        ano: 2022,
        km: 17000
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro placa', () => {
    const result = Validation.create({
        marca: 'Audi',
        nome: "RSQ8",
        ano: 2022,
        km: 17000
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
