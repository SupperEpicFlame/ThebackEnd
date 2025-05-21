const db = require('../config/db');



// ดึงรีวิวของสถานที่ตาม R_id

exports.getReviewsById = (req, res) => {

  const { id } = req.params;

  const query = 'SELECT * FROM reviews WHERE U_id = ?';

  db.query(query, [id], (err, results) => {

    if (err) {

      res.status(500).json({ error: 'Error retrieving reviews' });

    } else if (results.length === 0) {

      res.status(404).json({ error: 'reviews not found' });

    } else {

      res.status(200).json(results);

    }

  });

};



// เพิ่มรีวิวใหม่

exports.addReview = (req, res) => {
  console.log('Request body:', req.body); // Log the request body to see what is being sent

  const { U_id,	user,	comment,	rating } = req.body;

  const query = 'INSERT INTO reviews (U_id,	user,	comment, rating) VALUES (?, ?, ?, ?)';

  db.query(query, [	U_id, user, comment, rating], (err, results) => {

    if (err) {

      res.status(500).json({ error: 'Error adding review' });

    } else {

      res.status(201).json({ message: 'Review added successfully', reviewId: results.insertId });

    }

  });

};


exports.editReview = (req, res) => {
  const { id } = req.params;
  const { user, comment, rating } = req.body;

  const query = 'UPDATE reviews SET user = ?, comment = ?, rating = ? WHERE R_id = ?';

  db.query(query, [user, comment, rating, id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error updating review' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Review not found' });
    } else {
      res.status(200).json({ message: 'Review updated successfully' });
    }
  });
};


exports.deleteReview = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM reviews WHERE R_id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error deleting review' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Review not found' });
    } else {
      res.status(200).json({ message: 'Review deleted successfully' });
    }
  });
}