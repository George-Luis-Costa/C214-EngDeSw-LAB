class Veiculo {

    placa
    ano

    constructor(placa, ano) {
        this.placa = placa
        this.ano = ano
    }

    setPlaca(placa) {
        this.placa = placa
    }

    setAno(ano) {
        this.ano = ano
    }

    getPlaca() {
        return this.placa
    }
    getAno() {
        return this.ano
    }

    exibirDados(){
        console.log(`Placa ${this.placa} e ano : ${this.ano}`)
    }
}