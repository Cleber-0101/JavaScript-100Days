let carros = ['chevrolet' , 'palio98' , 'sedan']


//sabendo a posição do dado dentro da lista 
console.log(carros[0])
console.log(carros[2])

//Visualizando a array
console.log(carros)

//tamanho da array
console.log(carros.length)

//percorrendo uma array
//Ele mostra o TIPO e o valor de dados da Array, neste caso sera na console do codigo
carros.forEach(function(valor, index){
    console.log(index , valor)
})