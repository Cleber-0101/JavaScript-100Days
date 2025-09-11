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

//getters e setters 
//get exibe um valor 
//set ultilizado para alterar um valor
class Post{
    constructor(titulo, descricao,tags){
        this.titulo = titulo,
        this.descrcao =descricao;
        this.tags = tags
    }
    

    get exibirTitulo(){
        return `Voce esta lendo: ${this.titulo}`;
    }
} 


const meuPost = new Post("Algum post", "è um post sobre programaçãop")

console.log(meuPost)


// teste 
class Pessoa {
  constructor(nome) {
    this._nome = nome; // usamos "_" pra indicar que é "privado"
  }

  // Getter → pega o valor
  get nome() {
    return this._nome.toUpperCase(); // transforma em maiúsculo
  }

  // Setter → define o valor
  set nome(novoNome) {
    if (novoNome.length < 3) {
      console.log("Nome muito curto!");
    } else {
      this._nome = novoNome;
    }
  }
}

const p1 = new Pessoa("Cleber");
console.log(p1.nome); // "CLEBER" → passou pelo getter

p1.nome = "Lu"; // Nome muito curto!
console.log(p1.nome); // continua "CLEBER"

p1.nome = "Lucas";
console.log(p1.nome); // "LUCAS"


//herança 
class Mamiferos{
    constructor(patas){
        this.patas = patas
    }
}


class Lobos extends Mamiferos {
    constructor(patas , nome){
        super(patas, patas)
        this.nome = nome
    }
}


const shark = new Lobos(4, "vans") ;

console.log(shark)

//verificando ancestralidade
console.log(shark instanceof Cachorro)