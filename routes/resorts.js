var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://@localhost/resorts";


console.log('test')
console.log(data);

router.get('/api/v1/resortData', function(req, res){
  console.log(data);
  res.json(data)
});

// router.get('/api/v1/', function(req, res, next) {
//   pg.connect(conString, function(err, client, done) {

//     if (err) {
//       return console.error('error fetching client from pool', err);
//     }
//     client.query('SELECT * FROM resorts', function(err, result) {
//       done();
//       res.render('resorts/index', {resorts: result.rows})
//       if (err) {
//         return console.error('error running query', err);
//       }
//       console.log(result.rows[0].number);
//       console.log("connected to database");
    // });

  // });
// });

module.exports = router;