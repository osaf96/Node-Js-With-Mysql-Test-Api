const { createPool } = require("mysql2");


const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB ,
    waitForConnections: true,
    connectionLimit: 10
});
pool.query(`CREATE DATABASE if not exists  ${ process.env.MYSQL_DB}` ,function (err, result) {  
    if (err) {
        console.log(`Db not found! please create ${process.env.MYSQL_DB} database`);
    }else{
        console.log("Database created");   
        pool.query(`create table if not exists user(
            id int primary key auto_increment,
            firstname varchar(255)not null,
            lastname varchar(255)not null,
            email varchar(255)not null,
            password varchar(255)not null,
            phonenumber int 
        ) `, function (error, results, fields) {
            if (error) console.log(error);
            console.log('Table Created ');
          });
    } 
   
  
    }); 


module.exports = pool;