var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi' });
});

router.get('/health', function(req, res, next) {
  res.json({result: 'ok'});
});

module.exports = router;
