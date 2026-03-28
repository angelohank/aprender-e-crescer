let alunos = [
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 22 },
];

alunos.find((aluno) => {
  aluno.nome === "João";
});
