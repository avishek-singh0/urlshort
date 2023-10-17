const express = require('express');

const router = express.Router();
const {handlegenerateNewShortUrl} = require('./../controller/url');

router.post('/',handlegenerateNewShortUrl);


module.exports = router;