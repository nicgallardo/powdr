var express = require('express');
var router = express.Router();
var resortData  = require('../resortData.json');

router.get('/api/v1/resortData', function(req, res, next) {
  res.json(resortData)
});

router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});

module.exports = router;
