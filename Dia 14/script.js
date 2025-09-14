

//adicionando eventos 

// Evento de Click
const button = document.querySelector("#meu-botao")
button.addEventListener("click" , function(){
    console.log("Clicou aqui !!")
})


//criando evento 
const segundoBotao = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("Teste")
}

segundoBotao.addEventListener("click" , imprimirMensagem);

//removendo evento
const terceiroEvento = document.querySelector("#remove-evento")
terceiroEvento.addEventListener("click", () => {
    console.log("Evento removido")
    segundoBotao.removeEventListener("click" , imprimirMensagem)
})


//argumentos dos eventos 
const meutitulo = document.querySelector("#meu-titulo")
meutitulo.addEventListener("click" , (event) => {
    console.log(event);
    console.log(event.poiter)
    console.log(event.target)
})

//eventos de tecla, mapeia as teclas do teclado 
// temos keyup
// temos keydown
document.addEventListener("keyup", (e) => {
    e.stopPropagation
    console.log(`Soltou a tecla ${e.key}`)
})


document.addEventListener("keydown", (e) => {
    // e.stopPropagation
    console.log(`apertou a tecla ${e.key}`)
})


//eventos de mouse 
// mousedown: pressionou botão do mouse 
//mouseup : soltou botaõ do mouse
//dblclick : clique duplo

const mouse = document.querySelector("#mouse")
mouse.addEventListener("mousedown", () => {
    console.log("Pressionou o botão do mouse")
})

mouse.addEventListener("mouseup", () => {
    console.log("Soltou o botão")
})

mouse.addEventListener("dblclick" ,() => {
    console.log("Duplo clique ")
})



//movimento do mouse 
//mousemove
document.addEventListener("mousemove" , (e) => {
    // console.log(`No eixo X ${e.x}`)
    // console.log(`No eixo Y ${e.y}`)
})



//eventos de scroll, muito usado quando estamos descendo a tela e começam a aperecer coisas na tela 
// scroll

window.addEventListener("scroll" , (e) => {
    if(window.pageXOffset > 200){
        console.log("passamos de 200px ")
    }
})


// evento de foco 
//blur
//focus
const input = document.querySelector("#my-input")
input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("Saiu no input")
})


//eventos de carregamento da pagina
window.addEventListener("load", () => {
    console.log("A pagina carregoiu")
})

window.addEventListener("beforeunload", (e) => {
   e.preventDefault();
   e.returnValue = ""
})

//tecnica usada para o evento disparar menos vezes 
const busca = (texto) => {
  console.log("Buscando por:", texto);
};

const buscaDebounce = debounce(busca, 500);

document.querySelector("#input").addEventListener("keyup", (e) => {
  buscaDebounce(e.target.value);
});
