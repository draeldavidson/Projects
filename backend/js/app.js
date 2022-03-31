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


// USER REGISTRATION
//http://localhost:3001/registeruser
app.post('/registeruser',(req,res)=>{
    let { username,password, firstname, lastname,email,mobile,address} = req.body;
    poolconn.query('INSERT INTO user_details (username,password, firstname, lastname,email,mobile,address) VALUES ($1, $2,$3,$4,$5,$6, $7) RETURNING id', 
    [username,password, firstname, lastname,email,mobile,address], (error, results) => {
        if(error){
            throw error;
        }
        let id = results.rows[0].id;
        poolconn.query('INSERT INTO users (userid,username,password,roleid) VALUES ($1, $2,$3,$4)', 
        [id,username,password,2], (error, results) => {
            if(error){
                throw error;
            }
        res.status(201).send(`User added with ID: ${id}`);
        
    });
    });   
})











// // verifies Login Details
// app.get ('/login/:username/password',(req,res)=>{

//     console.log(req.params);
//     console.log('Type of username---'
//     +typeof(req.params.username)+'---'+req.params.username);
    
//     const user_name =req.params.username;
//     const pass_word = req.params.password;

//     poolconn.query('SELECT * FROM users WHERE username= $1',
//     [user_name],(error,results)=>{
//         if(error){
//             throw error;
//         }
//         if (results.rowCount>0){
//             res.status(200).json(results.rows);
//         }else{
//             res.status(200).json(null);
//         }
//     })
// })











app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
