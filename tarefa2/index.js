var readlineSync = require('readline-sync')
var result, var1, var2
var op = null

console.log("Digite a opcao desejada para as operações abaixo: \n" +
    "// 0 - SAIR //  1- SOMA // 2- SUBTRAÇÃO // 3- MULIPLICAÇÃO  // 4- DIVISAO // 5- Exponecial \n")

do {
    op = parseInt(readlineSync.question('Escolha a opcao: '))
    console.log(`Opcao selecionada: ${op}`)
} while (!(op >= 0 && op < 6))


if (op == 5) {
    var1 = parseFloat(readlineSync.question('Valor da base: '))
    var2 = parseFloat(readlineSync.question('Valor do expoente: '))

} else if (op == 0) {
}
else {
    var1 = parseFloat(readlineSync.question('Valor A: '))
    var2 = parseFloat(readlineSync.question('Valor B: '))
}

switch (op) {
    case 0:
        break
    case 1:
        result = var1 + var2
        break
    case 2:
        result = var1 - var2
        break
    case 3:
        result = var1 * var2
        break
    case 4:
        result = var1 / var2
        break
    case 5:
        result = var1 ** var2
}

console.log(`Resultado da operação: ${result}`)

