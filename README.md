dentro da pasta do projeto executar o comando yarn init, com isso vai ser gerado o package.json, que possui nossas dependencias.

vamos adcionar a primeira dependencia chamada express, responsavel por acelerar o processo de construção da nossa aplicação.

agora é a hora de estruturar o nosso projeto. Dentro do projeto crie a pasta "src" e dentro dela as pastas controller, models e config. Após isso, na raiz da pasta src crie o arquivo app.js (código). Parte importante é o app.use(express.json()) para nossa api responder nossas requisições no formato correto.

demais dependencias que vamos utilizar:
nodemon, mongoose, dotenv, multer, cloudinary, datauri

yarn add nodemon -D 

package.json -> inserir no código "scripts": { "dev": "nodemon src/app.js"}

feito essa configuração inicial, vamos configurar as nossas rotas. Dentro de app.js vamos importar as rotas

feito isso, vamos configurar nosso banco de dados, será utilizado o mongoDB. para utilizar-lo basta adicionar a dependencia que facilitará a configuração de conexao com o BD e sua utilização.

yarn add mongoose

Por questões de segurança costumo utilizar as informações de senha usuarios, login etc em arquivos .env basca criar-lo na raiz do projeto e adicionar a dependencia 'dotenv' para utilização. 

yarn add dotenv

e em app.js importar-lo com o comando 

require('dotenv').config();

Blz, depois de já ter configurado o banco, voce precisa criar o model necessario para estruturar o BD. Em models, crie o arquivo User.js com o seguinte código.

Feito isso bora partir para as regras de negócio da nossa aplicação, através de nossos controllers. Como se trata do login do usuario, vamos criar um controller chamado SessionController.js

Agora vamos configurar a parte dos spots, as informações do lugar, tecnologia, valor do aluguel etc.

criamos o Spot.js dentro de models e o seu controller SpotControllers.js

como vamos lidar com upload de arquivos(imagem), não é possivel utilizar o formato json, nesse caso é utilizado como padrão de estrutura para envio da requisição o "multipart form". Nesse formato precisamos adicionar a dependencia multer, que permitirá todas as propriedades contidas no req.body . 

Após essa etapa temos 2 caminhos que podemos seguir com o multer, são eles: 1)DiskStorage: armazenar em uma pasta do seu projeto de forma local, ou 2)MemoryStorage: armazena em buffer. Como vou subir a aplicação para o heroku, não vamos conseguir armazenar localmente


