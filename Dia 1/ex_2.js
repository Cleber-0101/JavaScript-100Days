//Condicional usada em entrada de estabelecimentos

let idade1 = 18 
let idade2 = 18

if(idade1 >= 18){
    console.log("Maiores de idade")
    console.log("Voce pode entrar")
    if(idade2 >= 18){
        console.log("Voce pode entrar")
    }else{
        console.log("menor de idade")
    }
}else{
    console.log("Voce é menor de idade")
}