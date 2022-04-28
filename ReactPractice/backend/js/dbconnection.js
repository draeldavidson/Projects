// (this is connects to my tables in pgadmin4)
const Pool =require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'password',
    port:5432
});
module.exports=pool;
