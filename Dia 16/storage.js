var nome = '';

// if(typeof localStorage.nome == 'undefined'){

//     localStorage.nome = prompt("Digite seu nome")
// }

// nome = localStorage.nome

// document.getElementById('nome').innerHTML = nome 


//Desconstruindo arrays e objetos 
const pessoa = {
    nome: "Cleber",
    sobrenome: "Batista",
    idade : 25,
    cargo: "Desenvolvedor"
}


//Spread Operator
function cadastroDePessoas(info){
    let novosDados = {
        ...info,
        cargo: "Programador",
        nivel: "Junior",
        objetivo: "Dominar Java script "
    }

    return novosDados
}


console.log(cadastroDePessoas({
    nome: "Cleber" ,
    idade: 25,
    anoInicio: 2045
}))