const express = require('express');
const router = express.Router()

const studentController = require('../controllers/studentController')

router.get('/', studentController.getData);
router.post('/', studentController.postData);
router.put('/', studentController.updateData);
router.delete('/', studentController.deleteData);

module.exports = router;
