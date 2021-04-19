const pool  =require('../../config/db');


module.exports = {
   create: (data,callback)=>{
       pool.query(
        `insert into user(firstname,lastname,email,password,phonenumber)
        values(?,?,?,?,?)`,
        [
            data.firstname,
            data.lastname,
            data.email,
            data.password,
            data.phonenumber
        ],
        (error,results,fields) =>{
            if(error){
               return callback(error)
            }
            return callback(null,results)
        }
       )
   },
   getUsers: callback => {
       pool.query(
            `select id,firstname,lastname,email,phonenumber from user`,
            [],
            (error,results,fields) => {
                if(error) { 
                    return callback(error);
                }
                console.log(results)
                return callback(null,results);
             }
       )
   } ,
   getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,firstname,lastname,email,phonenumber from user where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from user where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update user set firstname=?, lastname=?, email=?, password=?, phonenumber=? where id = ?`,
      [
        data.firstname,
        data.lastname, 
        data.email,
        data.password,
        data.phonenumber,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from user where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
}