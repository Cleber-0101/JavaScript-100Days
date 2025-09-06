const pessoa = {
  "nome": "João Silva",
  "idade": 25,
  "profissao": "Desenvolvedor Full Stack",
  "email": "joao.silva@example.com",
  "telefone": "+55 11 98765-4321",
  "endereco": {
    "rua": "Rua das Flores",
    "numero": 123,
    "cidade": "São Paulo",
    "estado": "SP",
    "cep": "01000-000"
  },
  "habilidades": ["JavaScript", "React", "Node.js", "SQL"],
  "ativo": true
};

// Objeto -> JSON , quando quero guardar, enviar ou compartilhar
const jsonString = JSON.stringify(pessoa);
console.log(jsonString);

// JSON -> Objeto , quando quero usar os dados no meu programa 
const objNovamente = JSON.parse(jsonString);
console.log(objNovamente);
