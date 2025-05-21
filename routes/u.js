const express = require('express');

const { getU, getUById } = require('../controller/uController');

const router = express.Router();


router.get('/', getU); // ดึงข้อมูลสถานที่ทั้งหมด

router.get('/:id', getUById); // ดึงข้อมูลสถานที่เฉพาะตาม ID

module.exports = router;