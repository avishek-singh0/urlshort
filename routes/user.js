const express = require('express')
const router = express.Router();
const authController = require('./../controller/auth')
const {handleUserSignup,handleUserlogin }  = require("../controller/user")


//auth.js
router.post('/sign', authController.signup);
router.post('/log', authController.log);




// user.js
// router.post('/',handleUserSignup)

// router.post('/login',handleUserlogin)


module.exports = router;