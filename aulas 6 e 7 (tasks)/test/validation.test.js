const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "The fast Furious",
        produtora: "Universal",
        ano: 2020,
        nota: 8
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        produtora: "Universal",
        ano: 2019,
        nota: 7
    });
    expect(result.nome).toEqual(Constants.ErrorValidation.nome);
});

it('Caso inválido - sem o parâmetro produtora', () => {
    const result = Validation.create({
        nome: "The fast Furious",
        ano: 2020,
        nota: 8
    });
    expect(result.produtora).toEqual(Constants.ErrorValidation.produtora);
});

it('Caso inválido - sem o parâmetro ano', () => {
    const result = Validation.create({
        nome: "The fast Furious",
        produtora: "Universal",
        nota: 8
    });
    expect(result.ano).toEqual(Constants.ErrorValidation.ano);
});

it('Caso inválido - sem o parâmetro nota', () => {
    const result = Validation.create({
        nome: "The fast Furious",
        produtora: "Universal",
        ano: 2020
    });
    expect(result.nota).toEqual(Constants.ErrorValidation.nota);
});
