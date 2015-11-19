var express = require('express');
var router = express.Router();
var resortData  = require('../resortData.json');
var pg = require('pg');
var conString = "postgres://@localhost/powdr";

router.get('/_=_', function(req, res, next) {
  res.json(req.user)
});

router.get('/api/v1/resortData', function(req, res, next) {
  res.json(resortData)
});

router.post('/addFav', function(req, res, next){
  pg.connect(conString, function(err, client, done) {

    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('INSERT INTO favorites(facebook_id, resort_id) VALUES($1, $2) returning id;',[req.user.facebookId, req.body.resortId], function(err, result) {
      done();
      console.log(result);
      // console.log("-----" + result.rows);
      res.redirect('/' + req.body.resortId)
      if (err) {
        return console.error('error running query', err);
      }
    });
  });
})

router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});


module.exports = router;
