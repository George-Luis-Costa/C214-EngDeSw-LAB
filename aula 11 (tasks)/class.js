class Carro {
    constructor(name, year, manufacturer ){
        this.name = name
        this.year = year
        this.manufacturer = manufacturer
    }
    getDataArray() {
        return [this.name, this.year, this.manufacturer]
    }
}

const veiculo = new Carro(`Mustang`, 2020, `Ford`)
console.log(veiculo.getDataArray())
