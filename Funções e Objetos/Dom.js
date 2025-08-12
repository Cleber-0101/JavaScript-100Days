
//Focus função que monitora o foco do usuario, quando ele clica e uma janela e saia dela 
//window é minha janela do navegador
//janela ganha foco
window.addEventListener('focus', Event => {
    console.log("FOCUS")
})

//Dispara qundo o usuario clica em qualquer lugar da jenela
window.addEventListener('click' , Event => {
    console.log('click' , "usuario clicou")
})


//janela perde o foco(bom para complementar)
window.addEventListener('blur', Event =>{
    console.log('Blur' , )
})

//na janela do usuario podemos nós tambem saber o historico do usuario
