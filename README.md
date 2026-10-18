# LH Games - Sistema de Loja de Produtos 🎮

Projeto desenvolvido em **Angular** para gerenciamento de produtos de uma loja de games.

A aplicação permite visualizar produtos, realizar autenticação de usuários, acessar uma área restrita e consumir uma API REST para operações de cadastro, atualização, listagem e exclusão de produtos.

---

## 🚀 Tecnologias utilizadas

- Angular
- TypeScript
- Angular Material
- Bootstrap
- HTML5
- CSS3
- API REST
- Postman
- LocalStorage para armazenamento do token

---

# 📌 Funcionalidades desenvolvidas

## 🏠 Página Inicial

- Listagem de produtos utilizando informações da API.
- Exibição das informações:

  - Nome do produto;
  - Descrição;
  - Imagem;
  - Preço.

---

## 🔐 Sistema de Login

Foi desenvolvido um sistema de autenticação contendo:

- Tela de Login;
- Validação de usuário e senha;
- Criação de token;
- Armazenamento do token no LocalStorage;
- Redirecionamento para área restrita.

Usuário para teste:

```
Usuário: aluno
Senha: 1234
```

---

## 🛡️ Área Restrita

Área protegida para usuários autenticados.

Funcionalidades:

- Listar produtos;
- Cadastrar produtos;
- Atualizar produtos;
- Excluir produtos.

---

# 🔒 Angular Guards

Foi utilizado o recurso **Guards do Angular** para proteger as rotas da aplicação.

Fluxo de acesso:

```
Usuário acessa área restrita

          ↓

Guard verifica se existe token

          ↓

     +-------------+
     |             |
     ↓             ↓

  Token        Sem Token

     ↓             ↓

Área restrita   Tela Login
```

---

# 🔗 API REST

A aplicação utiliza serviços Angular para realizar comunicação com uma API através de requisições HTTP.

Métodos utilizados:

## GET

Utilizado para buscar produtos.

Exemplo:

```
GET /produtos
```

---

## POST

Utilizado para cadastrar produtos.

Exemplo:

```
POST /produtos
```

---

## PUT

Utilizado para atualizar produtos.

Exemplo:

```
PUT /produtos/:id
```

---

## DELETE

Utilizado para excluir produtos.

Exemplo:

```
DELETE /produtos/:id
```

---

# 🧪 Testes da API

As requisições da API foram testadas utilizando o **Postman**.

Testes realizados:

- GET - Consulta de produtos;
- POST - Cadastro de produtos;
- PUT - Atualização de produtos;
- DELETE - Exclusão de produtos.

---

# 📂 Estrutura do projeto

```
src
└── app
    |
    ├── inicio
    |
    ├── login
    |
    ├── menu
    |
    ├── rodape
    |
    ├── restrito
    |    |
    |    ├── cadastro-produto
    |    |
    |    ├── lista-produto
    |    |
    |    ├── atualiza-produto
    |    |
    |    └── menu-restrito
    |
    ├── guard
    |
    ├── login.service.ts
    |
    └── produto.service.ts
```

---

# ▶️ Como executar o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
ng serve
```

Acesse no navegador:

```
http://localhost:4200
```

---

# 📦 Dependências principais

Instaladas utilizando:

```bash
npm install
```

Projeto desenvolvido com Angular CLI.

Verificar versão:

```bash
ng version
```

---

# 👨‍💻 Desenvolvedor

**Gustavo Rodrigues**

Projeto desenvolvido para estudo de desenvolvimento Front-end com Angular, consumo de APIs REST, autenticação de usuários e proteção de rotas.
