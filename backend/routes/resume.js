const express = require('express');
const router = express.Router();

module.exports = (db) => {
  /* GET resume listing. */

  router.get('/', (req, res) => {
    const query = {
      text: 'SELECT * FROM resume;'
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });

  //Checking if the user_id exists in the resume table. If it does then we update resume table with existing user_id otherwise  add new resume to resume table.
  router.post('/', (req, res) => {
    // extract the data from req.body
    const {user_id, resume_data} = req.body;
    const query = {
      text: `SELECT * FROM resume WHERE user_id=$1;`,
      values: [user_id]
    };
    db
      .query(query)
      .then(result => {
        if (result[0]=== undefined) {
          // create an insert query in the db
          const query = {
            text: `INSERT INTO resume (user_id, resume_data) VALUES ($1, $2) RETURNING *;`,
            values: [user_id, resume_data]
          };
          db
            .query(query)
            .then(result => res.json(result[0]))
            .catch(err => console.log(err));
            // return the newly created resume back
        } else {
           // create an update query in the db
          const query = {
            text: `UPDATE resume SET user_id = $1, resume_data = $2 WHERE user_id =$1 RETURNING *;`,
            values: [user_id, resume_data]
          };
          db
            .query(query)
            .then(result => res.json(result[0]))
            // return the upsated resume back
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  });

  //Checking if the user_id exists in the resume table. If it does then return specific user data 
  //we use it in getResume.js
  router.post('/resume', (req, res) => {
    const { userId } = req.body;
    const query = {
      text: 'SELECT * FROM resume where user_id = $1;',
      values: [userId]
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });
  return router;
}