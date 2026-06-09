const express = require("express");

const app = express();

const porta = 3000;

// =========================
// ROTA INICIAL
// =========================

app.get("/", (req, res) => {

    res.json({
        mensagem: "Bem-vindo à API da Escola"
    });

});

// =========================
// ROTA ALUNOS
// =========================

app.get("/alunos", (req, res) => {

    const alunos = [

        {
            id: 1,
            nome: "Maria",
            idade: 18
        },

        {
            id: 2,
            nome: "João",
            idade: 17
        },

        {
            id: 3,
            nome: "Ana",
            idade: 19
        }

    ];

    res.json(alunos);

});

// =========================
// ROTA CURSOS
// =========================

app.get("/cursos", (req, res) => {

    const cursos = [

        {
            id: 1,
            curso: "Desenvolvimento Web"
        },

        {
            id: 2,
            curso: "Banco de Dados"
        },

        {
            id: 3,
            curso: "Programação Mobile"
        }

    ];

    res.json(cursos);

});

// =========================
// ROTA PROFESSOR
// =========================

app.get("/professor", (req, res) => {

    const professor = {

        nome: "João Silva",
        disciplina: "Desenvolvimento Web"

    };

    res.json(professor);

});

app.listen(porta, () => {

    console.log(`Servidor rodando em http://localhost:${porta}`);

});