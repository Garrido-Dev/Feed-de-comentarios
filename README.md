# App de Comentários - Projeto React

[![Deploy com GitHub Pages](https://img.shields.io/badge/demo-online-brightgreen?style=for-the-badge&logo=github)](https://garrido-dev.github.io/Feed-de-comentarios/)

Um mini projeto em React para treinar hooks, formulários e renderização de listas, agora com **persistência de dados em tempo real usando Firebase!**

🔗 **Acesse o projeto online:** [https://garrido-dev.github.io/Feed-de-comentarios/](https://garrido-dev.github.io/Feed-de-comentarios/)

## O que ele faz?

- Formulário com campo de email (tipo `email`) e textarea para o comentário (ambos obrigatórios).
- Ao enviar, cria um objeto com `id` (gerado aleatoriamente ou pelo Firestore), `author` (o email), `content` e `createdAt` (data atual).
- Adiciona o novo comentário no **início** da lista (para aparecer primeiro).
- Limpa os campos após o envio.
- Exibe mensagem "Seja o primeiro a comentar!" se não houver nenhum comentário.
- Agora os comentários são salvos no **Firestore** e carregados automaticamente para qualquer pessoa que acessar o app!

## Tecnologias usadas

- **React** (com Vite)
- **Hooks**: `useState`, `useEffect` para gerenciar os estados e buscar dados do Firebase.
- **Firebase** (Firestore, Analytics)
- **Variáveis de ambiente** (`.env`) para guardar as chaves com segurança.
- **CSS** – Básico para uma boa visualização.

## Como rodar

1. Clone ou baixe o repositório.
2. Instale as dependências com `npm install` (ou `yarn`).
3. **Configure o Firebase:**
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Ative o Firestore Database.
   - Pegue as chaves de configuração (apiKey, authDomain, etc).
   - Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
     ```env
     VITE_FIREBASE_API_KEY=...
     VITE_FIREBASE_AUTH_DOMAIN=...
     VITE_FIREBASE_PROJECT_ID=...
     VITE_FIREBASE_STORAGE_BUCKET=...
     VITE_FIREBASE_MESSAGING_SENDER_ID=...
     VITE_FIREBASE_APP_ID=...
     VITE_FIREBASE_MEASUREMENT_ID=...
     ```

### Importante: Configure as Regras de Segurança do Firestore para exigir autenticação:
```
text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}

```

4 **Rode npm run dev e abra http://localhost:5173.**

## Estrutura do Projeto

```text
├── public/               # Arquivos estáticos
├── src/
│   ├── firebase.js       # Configuração do Firebase e exportação do banco
│   ├── App.jsx           # Componente principal (formulário e lista)
│   ├── main.jsx          # Ponto de entrada do React
│   └── index.css         # Estilos globais
├── .env                  # Suas chaves do Firebase (ignorado pelo Git)
├── .gitignore            # Arquivos ignorados pelo Git
└── package.json          # Dependências do projeto
```

# Aviso de Segurança

A ``apiKey`` do Firebase é **pública por natureza** e pode aparecer no código do front-end, o que é normal.
A verdadeira proteção dos seus dados está nas Regras de Segurança do Firestore. Mantenha-as configuradas para exigir login (``request.auth != null``) e utilize o arquivo ``.env`` para manter seu projeto organizado e suas chaves fora do histórico do Git.

## Observações (e possíveis melhorias)

- O `id` agora é gerado pelo Firestore, o que evita colisões.
- Os comentários ficam salvos no banco de dados, então não somem ao recarregar a página.
- A validação do email fica por conta do `type="email"` do HTML, mas não é uma validação robusta.
- O componente poderia ser separado em partes menores (ex: `CommentForm`, `CommentList`), mas pra um projeto pequeno tá de boa.
- Futuramente, dá para implementar autenticação real de usuários com o Firebase Auth para substituir o campo de email.

## Contribuições

Ficou interessado no projeto? Sinta-se à vontade para abrir uma *issue* relatando bugs, sugerindo melhorias ou enviar um *pull request*. Toda ajuda é bem-vinda!

## Licença

Este projeto está sob a licença **MIT**. Você pode usá-lo, modificá-lo e distribuí-lo livremente, desde que mantenha os créditos.

## Contato

Feito com ❤️ por **Garrido-Dev**.
Se tiver alguma dúvida, sugestão ou quiser trocar uma ideia, me encontre no GitHub: [https://github.com/garrido-dev](https://github.com/garrido-dev)

