const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/login', (req, res) => {
  const { userID, password } = req.body;

  const sql = 'SELECT * FROM logindetails WHERE UserID = ? AND Password = ?';
  db.query(sql, [userID, password])
    .then(rows => {
      if (rows.length > 0) {
        // Redirect to homepage.html if login is successful
        res.redirect('/index.html');
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    })
    .catch(err => {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;
