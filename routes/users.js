var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('unq',{title:'unqate'});
});

router.get('/input', function(req, res, next) {
 res.render('thk',{title:'thanks'});
});

module.exports = router;
