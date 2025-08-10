
let numeros = [1,2,3,4,5,5,6,100]

//Metodo MAP() mapeia cada elemento do array e cria uma nova array 
// transformando cada elementos do array de a acordo com um função que posso passar
let dobrarValores = numeros.map(
    function(parametrosParaSoma){
        return parametrosParaSoma + 2 
    }
)

//adicionei mais um item na lista usando metodo PUSH()
dobrarValores.push("Cleber")
console.log(dobrarValores)
