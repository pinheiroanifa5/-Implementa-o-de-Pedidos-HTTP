

//1- O servidore devera responder enviando uma pagina html com a lista 
//dos alunos da turma


//2- Para inscrever sera preciso uma solicitaçao GEt
//o servidor deve responder enviando um formulario 
//tipo entrada de texto e um botao
//o botao deve fazer uma solicitaçao POSt 


const express = require("express");
const app = express();

// Lista de alunos da turma
const listaAlunos = [];

// Rota para obter a lista de alunos
app.get("/alunos", (req, res) => {
  res.send(listaAlunos);
});

// Rota para inscrever um aluno
app.post("/alunos", (req, res) => {
  const aluno = req.body;

  // Adiciona o aluno à lista de alunos
  listaAlunos.push(aluno);

  // Renderiza a página da turma com a lista de alunos atualizada
  res.send(listaAlunos);
});

// Inicia o servidor
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 3000.");
});
