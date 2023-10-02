const express = require('express');
const router = express.Router()

const gradeController = require('../controllers/gradeController')

router.get('/', gradeController.getData);
router.post('/', gradeController.postData);
router.put('/', gradeController.updateData);
router.delete('/', gradeController.deleteData);

module.exports = router;
