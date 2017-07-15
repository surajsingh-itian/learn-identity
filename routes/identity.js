var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/forgot-username', function(req, res, next) {
  let email = req.body.email;
  if (!email) {
    res.json({
      error: {
        code: 10001,
        message: 'email is missing',
        description: 'email is required to get Username',
        resolution: 'Kindly enter valid email.'
      }
    });
    return;
  }

  // TODO: validate e-mail
  // TODO: check e-mail exists

  res.json({
    message: 'Username has been sent to you on your registered email address.'
  })
});

module.exports = router;
