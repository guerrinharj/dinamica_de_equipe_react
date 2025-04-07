# ⚛️ Frontend React - Dinâmicas de Equipe

Este projeto é uma interface web desenvolvida com **React**, **Redux Toolkit** e **JavaScript (ES6+)** que desenvolvi como parte de um desafio para a Gigalink. Ele consome os dados da API Rails chamada **[`dinamica_de_equipe_api`](https://github.com/guerrinharj/dinamica_de_equipe_api)**.  
A aplicação permite o gerenciamento de **dinâmicas de equipe** com a possibilidade de avaliar cada uma delas.

---

## 📦 Tecnologias utilizadas

- React (Vite ou CRA)
- Redux Toolkit
- React Router
- JavaScript (ES6+)
- CSS3
- [`dinamica_de_equipe_api`](https://github.com/guerrinharj/dinamica_de_equipe_api) (API Ruby on Rails)

---

## 🧠 Objetivo do projeto

Criar uma aplicação SPA moderna que consuma a API REST `dinamica_de_equipe_api` e permita ao usuário:

- Visualizar todas as dinâmicas cadastradas.
- Criar novas dinâmicas.
- Editar ou excluir dinâmicas existentes com confirmação.
- Avaliar cada dinâmica com um comentário e uma nota de 1 a 5.
- Visualizar uma dinâmica aleatória com um botão no menu.

---

## 🖼️ Funcionalidades da interface

### Página inicial (`/`)

- ✅ Lista todas as dinâmicas cadastradas.
- ✅ Mostra o **nome**, **descrição**, **participantes** e **avaliação média**.
- ✅ Botão para **exibir uma dinâmica aleatória** (com `alert`).
- ✅ Botão para **adicionar nova dinâmica**.
- ✅ Botões para **editar** ou **remover** uma dinâmica existente (com confirmação).

### Página de adicionar/editar dinâmica (`/nova` e `/editar/:id`)

- ✅ Formulário para preencher os campos:
  - Nome da dinâmica
  - Descrição da dinâmica
  - Lista de participantes (separados por vírgula)
- ✅ Campos adicionais para:
  - Comentário da avaliação
  - Nota (de 1 a 5)

> Se um review for preenchido, ele será salvo automaticamente junto com a dinâmica.

### Página exclusiva para adicionar um review (`/review`)

- ✅ Permite ao usuário enviar uma avaliação **sem precisar editar a dinâmica**.
- ✅ Mostra um menu dropdown com todas as dinâmicas disponíveis.
- ✅ Permite preencher:
  - Comentário (opcional)
  - Nota (opcional, entre 1 e 5)
- ✅ Caso nenhum campo seja preenchido, a requisição não é enviada.

> Essa página é ideal para permitir que usuários façam reviews em dinâmicas já cadastradas, sem modificar seus dados.

---

## 🧱 Estrutura de diretórios

```bash
src/
├── app/                    # Store Redux global
│   └── store.js
├── components/             # Componentes reutilizáveis
│   ├── Button.jsx
│   ├── InputField.jsx
│   ├── TextArea.jsx
│   └── FormWrapper.jsx
├── features/               # Slices de Redux
│   ├── dinamicas/
│   │   └── dinamicasSlice.js
│   └── reviews/
│       └── reviewsSlice.js
├── pages/                  # Páginas da aplicação
│   ├── Home.jsx
│   ├── NovaDinamica.jsx
│   └── AdicionarReview.jsx
├── services/               # Conexão com API (axios)
│   └── api.js
├── App.jsx                 # Rotas + menu
└── index.js                # Entrada principal + Provider Redux
```

## 🔌 Comunicação com a API

Todos os dados são consumidos da API dinamica_de_equipe_api, que deve estar rodando em:
```bash
http://localhost:3000/api/
```

Endpoints utilizados:

```bash
| Ação                     | Método | URL                                   |
|--------------------------|--------|----------------------------------------|
| Listar dinâmicas         | GET    | `/api/dinamicas`                      |
| Criar dinâmica           | POST   | `/api/dinamicas`                      |
| Atualizar dinâmica       | PATCH  | `/api/dinamicas/:id`                 |
| Excluir dinâmica         | DELETE | `/api/dinamicas/:id`                 |
| Ver dinâmica aleatória   | GET    | `/api/dinamicas/aleatoria`           |
| Criar avaliação (review) | POST   | `/api/dinamicas/:id/reviews`         |
| Listar participantes     | GET    | `/api/participantes`                 |

---
```


## Como rodar o Projeto

Clone este repositório.

Inicie a API dinamica_de_equipe_api (ela deve estar rodando em localhost:3000).

Execute o frontend com:

```bash
npm install
npm start
```