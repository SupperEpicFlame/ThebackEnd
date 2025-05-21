const db = require('../config/db');

// ดึงข้อมูลสถานที่ทั้งหมด

exports.getU = (req, res) => {

  const query = 'SELECT * FROM universitys';

  db.query(query, (err, results) => {

    if (err) {

      res.status(500).json({ error: 'Error retrieving university' });

    } else {

      res.status(200).json(results);

    }

  });

};



// ดึงข้อมูลสถานที่เฉพาะตาม ID

exports.getUById = (req, res) => {

  const { id } = req.params;

  const query = 'SELECT * FROM universitys WHERE U_id = ?';

  db.query(query, [id], (err, results) => {

    if (err) {

      res.status(500).json({ error: 'Error retrieving university' });

    } else if (results.length === 0) {

      res.status(404).json({ error: 'university not found' });

    } else {

      res.status(200).json(results[0]);

    }

  });

};