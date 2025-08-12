
//instanciando classe de Data
// let agora = Date.Now();
let agora = new Date();

//Pegando o dia atual
console.log(agora.getDate())

//pegando somente o mes da dara descrita 
console.log(agora.getMonth())

//pegando apenas o ano da Data
console.log(agora.getFullYear())

//formatando data de acordo com a localização do computador
console.log(agora.toLocaleDateString("pt-br"))