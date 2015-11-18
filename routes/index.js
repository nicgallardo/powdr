var express = require('express');
var router = express.Router();
var resortData  = require('../resortData.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/resortData', function(req, res, next) {
  res.json(resortData)
});

// router.get('/api/v1/resortData/:resort', function(req, res, next) {
//   res.json(resortData)
// });


module.exports = router;
