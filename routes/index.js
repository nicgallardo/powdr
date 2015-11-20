var express = require('express');
var router = express.Router();
var resortData  = require('../resortData.json');
var pg = require('pg');
var conString = "postgres://@localhost/powdr";

router.get('/_=_', function(req, res, next) {
  // console.log(req.user);
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

router.get('/isFav/:id', function(req, res, next){
  
  pg.connect(conString, function(err, client, done) {

    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM favorites WHERE (facebook_id = $1 and resort_id = $2);',[req.user.facebookId, req.params.id], function(err, result) {
      done();
      // console.log(result.rows[0]);
      console.log(result.rows.length);
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
