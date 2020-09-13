const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

module.exports = (db) => {
  /* GET users listing. */
  
  router.get('/', (req, res) => {
    const query = {
      text: 'SELECT * FROM users;'
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });
  
  //Validate if the user exists. If it does then we return false otherwise true.
  //We use it in Registration form
  router.post('/', (req, res) => {
    // extract the data from req.body
    const {name, email, password} = req.body;
    const query = {
      text: `SELECT * FROM users WHERE username=$1 or email=$2;`,
      values: [name, email]
    };
    db
      .query(query)
      .then(result => {
        if (result[0]=== undefined) {
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) { 
              const query = {
                text: `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *;`,
                values: [name, email, hash]
              };
              db
                .query(query)
                .then(result => {
                 res.cookie('userName', result[0].username)
                 res.cookie('userId', result[0].id)
                 res.json(true)
                }) 
                .catch(err => console.log(err));
            });
          }); 
        } else {
          res.json(false)
        }    
      }) 
      .catch(err => console.log(err));
  });

  router.post('/login', (req, res) => {
    const {userName, password} = req.body;
    const query = {
      text: `SELECT * FROM users WHERE username=$1;`,
      values: [userName]
    };
    
    db
      .query(query)
      .then(result => {
        if(result[0] !== undefined){
          bcrypt.compare(password, result[0].password, function(err, rest) {
            //if passwords match then res is true
            if(!rest) {
              res.json(false)
              return
            }
            res.cookie('userName', result[0].username)
            res.cookie('userId', result[0].id)
            res.json(true)
            return
          });
        } else {
           res.json(false)
        }
        
      }) 
      .catch(err => console.log(err));
  });

  return router;
};
