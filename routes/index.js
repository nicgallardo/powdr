var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://@localhost/powdr";

router.get('/api/v1/allResorts', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {

    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM resorts', function(err, result) {
      done();
      res.render('resorts/index', {resorts: result})
      if (err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0]);
      console.log("connected to powdr database");
    });

  });
});


module.exports = router;