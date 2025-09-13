

//Use strictb da mais segurança para o codigo e limita muita coisa do java script, exemplo a baixo é deixar de declarar uma variavel
"use strict"
const opa = "teste"

//tratamento de erros 

//exemplo desta função verificar se os dados passados pelo usuario são numeros
function chackNumber(n){
    const result = Number(n)

    if (Number.isNaN(result)) {
        console.log("Valor incorreto")
        result
    }

    console.log("Valor correto")
    return result
}

chackNumber(5)
chackNumber("120")
chackNumber({})
chackNumber("teste")