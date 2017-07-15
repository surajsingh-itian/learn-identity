var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
 let username = req.body.email;
  if (!username) {
    res.json({
      error: {
        code: 10001,
        message: 'username is missing',
        description: 'username is required to log-in',
        resolution: 'Kindly enter valid username.'
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
