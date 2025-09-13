

//function são estrutura de codigos menores

function nome(nome){
    return "cleber"
}

console.log(nome())


//funções em variaveis de forma anonima
const digaMeunome = function(){
    for(let i = 0 ; i <= 10 ; i++){
        console.log("Cleber")
    }
}
digaMeunome()


// arrow function é uma função anonima
// const testeArrow = () => {
//     let idade = 0
//     while(idade <= 24){
//         console.log(`Minha idade é de ${idade}`)
//         idade++
//     }

//     if(idade === 25){
//         console.log("Achei sua idade")
//     }
// }

// testeArrow()

//Closure
function someFunction(){
    let text = "Alguma coisa"

    function display(){
        console.log(txt)
    }

    display()
}

someFunction()

//closoure é um conjunto de funçõs onde temos um reaproveitamento do ecopo interno de uma função
function someFunction(){
    let txt = "Alguma coisa"

    function display(){
        console.log(txt)
    }

    display()
}

someFunction()