class Caminhao extends Veiculo {
    eixos

    constructor(placa,ano,eixos) {
        super(placa, ano)
        this.eixos = eixos
    }
    setEixos(eixos){
        this.eixos = eixos
    }
    getEixos(){
        console.log(`Numero de eixos: ${this.eixos}`)
    }

    exibirDados(){
        super.exibirDados()
        console.log(`Numeros de eixos: ${ this.eixos}`)
    }
}