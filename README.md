# App de Comentários - Projeto React

[![Deploy com GitHub Pages](https://img.shields.io/badge/demo-online-brightgreen?style=for-the-badge&logo=github)](https://garrido-dev.github.io/Feed-de-comentarios/)

Um mini projeto em React para treinar hooks, formulários e renderização de listas. Ele permite que usuários enviem comentários com email e texto, e exibe todos os comentários em ordem cronológica reversa (os mais novos primeiro).

🔗 **Acesse o projeto online:** [https://garrido-dev.github.io/Feed-de-comentarios/](https://garrido-dev.github.io/Feed-de-comentarios/)

## O que ele faz?

- Formulário com campo de email (tipo `email`) e textarea para o comentário (ambos obrigatórios).
- Ao enviar, cria um objeto com `id` (gerado aleatoriamente), `author` (o email), `content` e `createdAt` (data atual).
- Adiciona o novo comentário no **início** da lista (para aparecer primeiro).
- Limpa os campos após o envio.
- Exibe mensagem "Seja o primeiro a comentar!" se não houver nenhum comentário.

## Tecnologias usadas

- **React** (Create React App ou Vite, tanto faz)
- **Hooks**: `useState` para gerenciar os estados do formulário e da lista de comentários.
- **CSS** – não incluso, mas dá pra estilizar depois (eu sou mais de deixar feinho mesmo).

## Como rodar

1. Clone ou baixe o repositório.
2. Instale as dependências com `npm install` (ou `yarn`).
3. Rode `npm start` (ou `yarn start`) e abra `http://localhost:3000`.

## Observações (e possíveis melhorias)

- O `id` é gerado com `Math.random()` – isso pode causar colisões em produção. Melhor usar `crypto.randomUUID()` ou um contador incremental.
- Os comentários ficam apenas em memória; ao recarregar a página, tudo some. Dá pra integrar com `localStorage` ou uma API bem simples.
- A validação do email fica por conta do `type="email"` do HTML, mas não é uma validação robusta (o navegador já cuida disso).
- O componente poderia ser separado em partes menores (ex: `CommentForm`, `CommentList`), mas pra um projeto pequeno tá de boa.
