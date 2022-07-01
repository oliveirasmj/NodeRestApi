# NodeRestApi

❯ cd ua \
❯ cd sawm \
❯ cd projeto \
❯ npx express-generator \
❯ npm install \
❯ npm start


Para compilar em tempo real \
❯ npm install nodemon \
Em package.json substitui a linha start em scripts por: \
"start": "nodemon ./bin/www"


Instalar dependência Pgadmin \
❯ npm install pg 




—> Ir a app.js e colocar: \
var articlesrouter = require('./routes/articles'); \
app.use('/articles', articlesrouter);




—> Criar um articles.js em routes: \
var express = require('express'); \
var router = express.Router(); \
const Articles = require('../controllers/articles');

//Get all articles. \
router.get('/all', async (req, res) => { \
    let articles = await new Articles().getArticles(); \
    res.json(articles); \
    //response.status(200).json(results.rows) \
});

module.exports = router;




—> Criar pasta controller na raíz do projeto e um ficheiro com o nome articles.js \
const db = require("../db"); \
class Articles { \
  /  //get all articles \
  async getArticles() { \
    let results = await db.query(`SELECT * FROM articles`).catch(console.log); \
    return results.rows; \
  } \
} \
module.exports = Articles;



—> Criar db.js na raíz do projeto \
const Pool = require("pg").Pool; \
const pool = new Pool({ \
    host: "localhost", \
    user: "postgres", \
    port: 5432, \
    password: "1234", \
    database: "sawm" \
}) \
module.exports = pool;


—> Criar tabela \
CREATE TABLE articles ( \
  id serial PRIMARY KEY, \
  article_name VARCHAR (50), \
  number_pages INT, \
  author_name VARCHAR (50), \
  created_on TIMESTAMP, \
  idiom VARCHAR (50) \
);

INSERT INTO articles(article_name, number_pages, author_name, created_on, idiom) \
VALUES ('Artigo1', 50, 'Mike', current_timestamp, 'PT');



—> Instalar Swagger \
❯ npm i swagger-ui-express -S \
❯ npm i js-yaml


—> Adicionar swagger ao app.js a seguir ao var logger \
const swaggerUI = require('swagger-ui-express'); \
var fs = require('fs'); \
var jsyaml = require('js-yaml'); \
var spec = fs.readFileSync('swagger.yaml', 'utf8'); \
swaggerDocument = jsyaml.load(spec);


—> Adicionar rota no app.js \
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


—> Criar ficheiro swagger.yaml \
penapi: "3.0.3" \
info: \
  title: "Tasks Application" \
  description: "Small academic example" \
  version: "1.0.0" \
paths: \
  /articles/all: \
    get: \
      summary: "List all articles"


—> Aceder a http://localhost:3000/api-docs/


—> Criar index.html em public
