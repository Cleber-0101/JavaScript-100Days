

// estorando erros 
let x = 10 
if (x != 10) {
    throw new Error("O valor esta completamente errado")
}


//Try catch , servem para lidar com erros inesperados que podem acontecer 
//  durante a execução do código , e controla o fluxo em casos de erros  
try {
    const soma = x + y
} catch (error) {
    console.log(`Erro no programa: ${erro}`)
} finally{
    console.log("codigo foi executado com sucesso")
}