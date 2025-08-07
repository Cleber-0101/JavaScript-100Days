const alunos = [
    {nome: "Cleber", idade: 25},
    {nome: "Ana", idade: 22},
    {nome: "João", idade: 19},
]


let contador = 0;

for(let teste = 0; teste < alunos.length;){
   if(alunos[teste].idade >= 20){
        contador++;
    }
}

console.log("Alunos maiores de 20 anos:", contador);
// O código acima conta quantos alunos têm 20 anos ou mais e exibe o resultado