function calc(valor1 , valor2 , operador){
    return eval(`${valor1} ${operador} ${valor2}`)
}

let calculos = calc(2 , 5 , "*")

console.log(calculos)


