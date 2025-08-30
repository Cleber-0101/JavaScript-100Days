// pedindo para o usuario inserir dados 
let nome = prompt("Qual seu nome: ");
let idade = Number(prompt("Qual sua idade? "));
let alguemDeMaior = prompt("Está acompanhado por alguém de maior? (Sim/Não)");

// função para verificar se pode entrar
function souDeMaior() {
    let salve = "Toma arrombado, eu posso entrar 😎";
    console.log(salve);

    if (alguemDeMaior === "Sim" || idade >= 18) {
        console.log("Tudo bem, pode entrar ✅");
    }

    for (let ui = 1; ui <= 10; ui++) {
        console.log(salve + " " + ui);
    }
}

// verifica as condições
if (nome && alguemDeMaior) {
    souDeMaior();
} else if (idade >= 18) {
    console.log("Também pode entrar ✅");
} else {
    console.log("Entrada proibida ❌");
}


// estrutura de controle 


