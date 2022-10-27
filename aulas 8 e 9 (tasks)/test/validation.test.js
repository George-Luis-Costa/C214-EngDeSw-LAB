const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        placa: 'HTK1634',
        marca: 'Ford',
        nome: 'Mustang GT',
        ano: 2018,
        km: 18556,
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro placa', () => {
    const result = Validation.create({
        marca: 'Ford',
        nome: 'Mustang GT',
        ano: 2018,
        km: 18556,
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
