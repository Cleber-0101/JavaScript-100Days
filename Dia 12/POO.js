//metodos
const animal = {
    nome: "Cleber",
    latir: function () {
        console.log("AU AU ")
    }
}

console.log(typeof animal)
console.log(animal)


//executando metodos que esta dentro da função
animal.latir()

const pessoa = {
    nome: "jessica",

    getNome: function () {
        return this.nome
    },

    setNome: function (novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome("CLEBÂO")

console.log(pessoa.getNome())


// Prototypes e sabendo as origens da propriedades e ancestrais
//acessando a herança da string
const text = "cleber"


//sempre usar essa estrutura
//todo dado tem um metodo PAi
console.log(Object.getPrototypeOf(text))


//mais sobre prototypes
const testePrototypes = {
    a: "b",
}
console.log(Object.getPrototypeOf(testePrototypes))


//classes basicas 
const cachorro = {
    raca: null
}

const dandoUmNome = Object.create(cachorro)

dandoUmNome.raca = "pitbull"

console.log(dandoUmNome)

//criando uma classes
const caneta = {
    nome: "bic",
    cor: "azul",
    escreve: true,
    duracao: null
}
//instanciando e atribuindo valor para variavel nula
const durabilidade = Object.create(caneta)
durabilidade.duracao = 10
console.log(durabilidade)
function calcularIdadeDeuso(duracao) {
    if (duracao >= 10) {
        console.log("pode usar caneta esta na idade certa")
    } else {
        console.log("voce ainda é muito novo")
    }
}

calcularIdadeDeuso(durabilidade.duracao)


// criando de forma profissioinal 
function criarCachorro(raca, nome) {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const vans = criarCachorro("vans", "labrado")
console.log(vans)


//java script atual 
function Cachorro(nome, raca, idade) {
    this.nome = nome
    this.raca = raca
    this.idade = idade
}

const husky = new Cachorro("zeus", "husky", 9);

console.log(husky)

//implementando metodos em funções
Cachorro.prototype.uivar = function(){
    console.log("auuuuuuuuuu")
}

husky.uivar()


//classes es6 Atual
class CachorroClass{
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca
    }
}

const zeus = new CachorroClass("jeff" , "labrador")
console.log(zeus)

//console.log(Object.getPrototypeOf(zeus))


