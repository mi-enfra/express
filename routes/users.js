var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
      hello: 'world',
      hello: 'again',
  });
});

module.exports = router;
