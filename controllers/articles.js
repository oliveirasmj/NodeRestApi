const db = require("../db");

class Articles {
  //get all articles
  async getArticles() {
    let results = await db.query(`SELECT * FROM articles`).catch(console.log);
    return results.rows;
  }

  //get by id article
  async getArticleById(req) {
    const id = req;
    let results = await db.query('SELECT * FROM articles WHERE id = $1', [id]).catch(console.log);
    return results.rows;
  }

  //new article
  async newArticle(req) {
    let results = await db.query('INSERT INTO articles (article_name, number_pages, author_name, created_on, idiom) VALUES ($1, $2, $3, $4, $5) RETURNING *', [req.article_name, req.number_pages, req.author_name, req.created_on, req.idiom]).catch(console.log);
    return results.rows;
  }
  
  //delete article
  async deleteArticle(req) {
    const id = req;
    let results = await db.query('DELETE FROM articles WHERE id = $1', [id]).catch(console.log);
    return results.rows;
  }

  //update article
  async updateArticle(reqParam, reqBody) {
    const id = reqParam;
    let results = await db.query('UPDATE articles SET article_name = $2, number_pages = $3, author_name = $4, created_on = $5, idiom = $6 WHERE id = $1', [id, reqBody.article_name, reqBody.number_pages, reqBody.author_name, reqBody.created_on, reqBody.idiom]).catch(console.log);
    return results.rows;
  }
}

module.exports = Articles;