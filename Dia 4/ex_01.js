const pessoas = [
  { nome: "Bruno", idade: 20 },
  { nome: "Carla", idade: 17 },
  { nome: "Tiago", idade: 18 },
  { nome: "Lara", idade: 15 }
];

let contador = 0;

for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].idade >= 18) {
    contador++;
  }
}

console.log("Maiores de idade:", contador);



