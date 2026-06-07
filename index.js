const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Alunos",
      version: "1.0.0",
      description:
      "API REST de exemplo para Sistemas Web"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./index.js"]
};

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Alunos",
      version: "1.0.0",
      description:
      "API REST de exemplo para Sistemas Web"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./index.js"]
};

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let alunos = [
  { id: 1, nome: "Ana Souza", curso: "Sistemas Web" },
  { id: 2, nome: "Bruno Lima", curso: "Banco de Dados" }
];

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get("/alunos", (req, res) => {
  res.json(alunos);
});

app.get("/alunos/:id", (req, res) => {
  const aluno = alunos.find(a => a.id === Number(req.params.id));

  if (!aluno) {
    return res.status(404).json({
      mensagem: "Aluno não encontrado"
    });
  }

  res.json(aluno);
});

app.post("/alunos", (req, res) => {

  const { nome, curso } = req.body;

  const novoAluno = {
    id: alunos.length
      ? alunos[alunos.length - 1].id + 1
      : 1,
    nome,
    curso
  };

  alunos.push(novoAluno);

  res.status(201).json(novoAluno);
});

app.post("/alunos", (req, res) => {

  const { nome, curso } = req.body;

  const novoAluno = {
    id: alunos.length
      ? alunos[alunos.length - 1].id + 1
      : 1,
    nome,
    curso
  };

  alunos.push(novoAluno);

  res.status(201).json(novoAluno);
});

app.put("/alunos/:id", (req, res) => {

  const aluno = alunos.find(
    a => a.id === Number(req.params.id)
  );

  if (!aluno) {
    return res.status(404).json({
      mensagem:"Aluno não encontrado"
    });
  }

  const { nome, curso } = req.body;

  aluno.nome = nome ?? aluno.nome;
  aluno.curso = curso ?? aluno.curso;

  res.json(aluno);
});