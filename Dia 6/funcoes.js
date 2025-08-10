function dizerOI(){
    console.log("ola mundo")
}

dizerOI()

//função com retorno e parametro
function somarDoisNumeros(a , b){
    return a + b
}

let somando = somarDoisNumeros(5 , 5)
console.log(somando)

//função que multiplica dados 
function multiplicar(a , b){
    return a * b
}

let mult = multiplicar(10, 10)
console.log(mult)


//função que divide 
function dividindoNumeros(a,b){
    return a / b
}

let repartindo = dividindoNumeros(100 ,2)
console.log(repartindo)


//função que calcula a porcentagem do valor 
function porcentagem(price){
    return price - (price * 10 / 100)
}

console.log(porcentagem(30))