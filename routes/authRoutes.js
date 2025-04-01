// const express = require('express');
// const { signup, login } = require('../controllers/authController');
// const router = express.Router();

// router.post('/signup', signup);
// router.post('/login', login);

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const { registerUser } = require('../controllers/authController');

// // Route for user registration
// router.post('/register', registerUser);

// module.exports = router;


// routes/authRoutes.js
const express = require('express');
const { signup, login } = require('../controllers/authController'); // Ensure this is correct
const router = express.Router();

router.post('/signup', signup);  // signup should be a valid function
router.post('/login', login);    // login should be a valid function

module.exports = router;
