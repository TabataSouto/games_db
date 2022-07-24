# Stock Trader XP
![Imagem da aplicação](https://i.postimg.cc/VsT8R8Lh/Screenshot-from-2022-07-24-17-04-55.png)

# 💻 Descrição geral do projeto
Desenvolvido individualmente para o utilização no desenvolvimento da aplicação front-end no desafio XP Inc. Criação de uma API com a rota /assets onde contém as principais informações de uma ação, como o nome (papel) e o valor de uma quantidade desta ação (valor unitário). Estas informações foram necessárias para a criação das tabelas em que as ações seriam disponibilizadas para venda na aplicação.

# 🛠 Tecnologias:
- Node.
- Express.
- JavaScript.
- ORM (Sequelize).

# ⚡ Rodando localmente:
Clone o projeto:
```bash
git clone git@github.com:TabataSouto/stock-investing-app-xp.git
```

Entre no diretório do projeto:
```bash
cd asset-database
```

Instale as dependências:
```bash
npm install
```

Crie o arquivo dotenv e inicie o servidor:
```bash
docker-compose up -d
```

Acesse o container:
```bash
docker exec -it assets bash
```

Inicie a aplicação:
```bash
npm run dev
```

# ✅ Status do projeto
Concluído

# 💽 Deploy
O Deploy deste projeto foi realizado no [Heroku](https://asset-db-prsl-xp.herokuapp.com/assets).

# 📚 Aprendizados:
No primeiro momento, o deploy utilizando o banco de dados online disponibilizado pelo próprio heroku não deu certo. Sendo assim, realizei uma segunda tentativa utilizando o banco de dados online SUPABASE.

# 👧 Colaborador
Tabata Caroline Souto
