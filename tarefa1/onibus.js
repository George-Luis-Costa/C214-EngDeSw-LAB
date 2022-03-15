class Onibus extends Veiculo{

    assentos

    constructor(placa, ano, assentos) {
        super(placa, ano)
        this.assentos = assentos
    }

    setAssentos(assentos) {
        this.assentos = assentos
    }

    getAssentos() {
        console.log(`Tem-se ${this.assentos}`)
    }

    exibirDados(){
        super.exibirDados()
        console.log(`Assentos: ${this.assentos}`)
    }
}