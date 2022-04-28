const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const poolconn = require('./dbconnection');
const cors = require('cors');


// <!-- passes only the json formated data is accepted -->
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(poolconn.query());

// simple get request (i put the name of the file so i know the right terminal is running)
app.get("/", (req, res) => {
    res.json({ message: 'Hello, the app.js file is running. Stay calm and drink water' });
  });


//GET SECTION
//http://localhost:3001/comments/
app.get('/comments',(req,res)=> {
        poolconn.query('SELECT * FROM comments ORDER BY date DESC', (error, results) => {
          if (error) {
            throw error
          }
          res.status(200).json(results.rows)
        })
      });


//http://localhost:3001/comments/
app.get('/comments/:slug',(req,res)=> {
    const slug = request.params.slug;
    pool.query(
        'SELECT * FROM comments WHERE slug = $1 ORDER BY date DESC',
        [slug],
        (error, results) => {
          if (error) {
            throw error
          }
          res.status(200).json(results.rows)
        }
      );
});


//POST SECTION
//http://localhost:3001/comments/
app.post('/comments',(req,res)=>{
    const { name, slug, text } = request.body
    const parentCommentId = parseInt(request.body.parentCommentId)
  
    pool.query(
      'INSERT INTO comments (name, slug, text, parent_comment_id) VALUES ($1, $2, $3, $4)',
      [name, slug, text, parentCommentId],
      (error) => {
        if (error) {
          throw error
        }
        res
          .status(201)
          .json({ status: 'success', message: 'New comment added.' })
      }
    )
});

//PUT SECTION
//http://localhost:3001/comments/
app.put('/comments/:id',(req,res)=>{
    const { name, slug, text } = request.body
    const id = parseInt(request.params.id)
    const parentCommentId = parseInt(request.body.parentCommentId)
  
    pool.query(
      'UPDATE comments SET name = $1, slug = $2, text = $3, parent_comment_id = $4 WHERE id = $5',
      [name, slug, text, parentCommentId, id],
      (error) => {
        if (error) {
          throw error
        }
        res
          .status(200)
          .json({ status: 'success', message: `Comment modified with ID: ${id}` })
      }
    )
});    



//DELETE SECTION
//http://localhost:3001/comments/
app.delete('/comments/:id',(req,res)=>{
const id = parseInt(request.params.id)

pool.query('DELETE FROM comments WHERE id = $1', [id], (error) => {
  if (error) {
    throw error
  }
  res
    .status(200)
    .json({ status: 'success', message: `Comment deleted with ID: ${id}` })
})
}); 











app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
