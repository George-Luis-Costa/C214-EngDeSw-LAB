const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Filme",
        produtora: "ProdutoraDoFilme",
        ano: 2022,
        nota: 10
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        produtora: "ProdutoraDoFilme",
        ano: 2022,
        nota: 10
    });
    expect(result.nome).toEqual(Constants.ErrorValidation.nome);
});

it('Caso inválido - sem o parâmetro produtora', () => {
    const result = Validation.create({
        nome: "Filme",
        ano: 2022,
        nota: 10
    });
    expect(result.produtora).toEqual(Constants.ErrorValidation.produtora);
});

it('Caso inválido - sem o parâmetro ano', () => {
    const result = Validation.create({
        nome: "Filme",
        produtora: "ProdutoraDoFilme",
        nota: 10
    });
    expect(result.ano).toEqual(Constants.ErrorValidation.ano);
});

it('Caso inválido - sem o parâmetro nota', () => {
    const result = Validation.create({
        nome: "Filme",
        produtora: "ProdutoraDoFilme",
        ano: 2022
    });
    expect(result.nota).toEqual(Constants.ErrorValidation.nota);
});
