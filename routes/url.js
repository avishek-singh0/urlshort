const express = require('express');

const router = express.Router();
const {handlegenerateNewShortUrl,analytics,allUrl} = require('./../controller/url');
const authController = require('.././controller/auth');


router.post('/',handlegenerateNewShortUrl);

router.get('/analytics/:shortId',analytics);

router.get('/allurls',authController.protect,allUrl);


module.exports = router;