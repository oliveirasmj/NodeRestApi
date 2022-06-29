var express = require('express');
var router = express.Router();

const Articles = require('../controllers/articles');

router.get('/', function(req, res) {
  res.send('Aqui estão os artigos');
});

//Get all articles.
router.get('/all', async (req, res) => {
    let articles = await new Articles().getArticles();
    res.json(articles);
    //response.status(200).json(results.rows)
});

router.get('/:id', async (req, res) => {
    let articles = await new Articles().getArticleById(req.params.id);
    res.json(articles);
    //response.status(200).json(results.rows)
});

router.post('/new', async (req, res) => {
  let articles = await new Articles().newArticle(req.body);
  res.json(articles);
  //response.status(201).send(`User added with ID: ${results.rows[0].id}`);
});

router.delete('/delete/:id', async (req, res) => {
  let articles = await new Articles().deleteArticle(req.params.id);
  //res.json(articles);
  res.status(200).send(`Article deleted with ID: ${req.params.id}`)
});

router.put('/update/:id', async (req, res) => {
  let articles = await new Articles().updateArticle(req.params.id, req.body);
  res.json(articles);
  //res.status(200).send(`User modified with ID: ${id}`)
});


module.exports = router;
