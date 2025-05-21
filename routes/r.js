const express = require('express');

const { getReviewsById, addReview, editReview, deleteReview } =
require('../controller/rController');

const router = express.Router();


router.delete('/D/:id', deleteReview); // ลบรีวิวตาม ID

router.get('/E/:id', editReview); // ดึงรีวิวของสถานที่ตาม ID

router.get('/:id', getReviewsById); // ดึงรีวิวของสถานที่

router.post('/', addReview); // เพิ่มรีวิวใหม่



module.exports = router;