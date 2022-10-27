const Carro = (name, year, manufacturer) => ({
    name,
    year,
    manufacturer,
    getDataArray: () => {
        return [name, year, manufacturer]
    }
})

const veiculo = Carro(`Mustang`, 2020, `Ford`)
console.log(veiculo.getDataArray())