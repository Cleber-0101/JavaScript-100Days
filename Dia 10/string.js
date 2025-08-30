

// tipos de dados em Java script 

//string
let nome = "Cleber"
let cidade = "são Paulo"
let idade = 25
let frase = "E sou bom em java script"


//concatenação
console.log("meu nome é: " + nome + " tenho " + idade +
    " de idade " + " moro na cidade de: " + cidade +
    " minha frase favorita é " + frase)

// Tamanho da string 
perfil1 = "eu sou bom em java script brasil"
console.log(perfil1.length)

//metodos uteis
let frase1 = "eu sou demais sp"
console.log(frase1)
console.log(frase1.toLocaleUpperCase()) //frase1 MAIUSCULA
console.log(frase1.toLocaleLowerCase()) // frase1 minuscula
console.log(frase1.includes("sou")) // metodo para procurar algo, não importa a localização ele só procura
console.log(frase1.startsWith("demais")) //metodo que verificar algo no começo da string - retorna TRUE ou FALSE
console.log(frase1.endsWith("sp")) // metodo que verifica algo no final da string - retorna TRUE ou FALSE
console.log(frase1.indexOf("demais")) // metodo que verifica a posição 
console.log(frase1.replace("eu", "cleber")) // ele troca um dado por outro



