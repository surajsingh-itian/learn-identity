var express = require('express');
var router = express.Router();

/* POST forgot useername. */
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



/*POST login. */
router.post('/login', function(req, res, next) {
 let username = req.body.username;
 let password =req.body.password;
  if (!username) {
    res.json({
      error: {
        code: 10002,
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
    message: 'Username is valid enter password.'
  })


      if (!password) {
    res.json({
      error: {
        code: 10003,
        message: 'password is missing',
        description: 'password is required to log-in',
        resolution: 'Kindly enter valid pasword.'
      }
    });
    return;
      }

       res.json({
    message: 'login successful.'
  })

});
router.post('/register', function(req, res, next) {
 let username = req.body.username;
 let password =req.body.password;
 let email= req.body.email; 
  if (!username) {
    res.json({
      error: {
        code: 10002,
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
    message: 'Username is valid enter password.'
  })
if (!password) {
    res.json({
      error: {
        code: 10003,
        message: 'password is missing',
        description: 'password is required to log-in',
        resolution: 'Kindly enter valid pasword.'
      }
    });
    return;
      }

       res.json({
    message: 'login successful.'
  })
if (!email) {
    res.json({
      error: {
        code: 10003,
        message: 'email is missing',
        description: 'email is required to log-in',
        resolution: 'Kindly enter valid email.'
      }
    });
    return;
      }

       res.json({
    message: 'login successful.'
  })

});

module.exports = router ;