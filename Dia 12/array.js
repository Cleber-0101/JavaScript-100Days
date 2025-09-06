// criando arrays
const teste = ["teste", 1,2,34,4,5,5,6,]
console.log(teste)


//propriedades
const prop = [1,2,3,4,5,56,6,7,,8,]
console.log( prop.length)

//metodos de array
//push adiciona dados no final do array
const metodos1 = [1,2,3,4,5,5,6,6,7,]
metodos1.push("cleber")
console.log(metodos1)


//pop remove o ultimo dado do array 
const metodos2 = [1,2,3,"cleber"]
metodos2.pop()
console.log(metodos2)


//concat metodo que uni duas arrays
const metodo3 = [1,2,3,4,5]
const testeDeConexao = metodos1.concat(metodos2)
console.log()


//splice para apagar um dado baseado na posição do element""o 
const metodo4 = ["São Paulo" , "Rio de Janeiro" , "EUA" , "Minas Gerais"]
console.log(metodo4[0])
console.log(metodo4)
metodo4.slice(3,3)
console.log(metodo4)

//Loops em arrays
const name = ["Cleber" , "Jessica" , "joão"]
//usando a quantidade de elementos para saber quando que o array vai ser parado
for(let i = 0; i < name.length ; i++){
    console.log(`Acessandor nomes da lista ${name[i]}`)
}


//for each É POSSIVEL  acessar todos os dados da lista 
const numbers = [1,2,3,4,5,6,7,8,9,]

numbers.forEach(teste => {
    console.log(`Acessando elemento por elemento ${teste}`)
});


//metodo trim remove caracteres especiais
const testers = "CLeber \n"
console.log(testers.trim())


//for of parecido com o for normal
 co
