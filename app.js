var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
// var FacebookStrategy = require('passport-facebook');
// var passport = require('passport');
// require('dotenv').load();
// passport.authenticate();


var routes = require('./routes/index');
var resorts = require('./routes/resorts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(cookieSession({
//   name: process.env.COOKIE_SESSION_NAME,
//   keys: [process.env.KEY2, process.env.KEY2]
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));

// passport.use(new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret: process.env.FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback",
//     enableProof: false
//   },
//   function(accessToken, refreshToken, profile, done) {
//     splitName(profile.displayName);

//     var firstName, lastName;
//     function splitName(string){
//       var array = string.trim().split(" ");
//       userFirstName = array[0];
//       userLastName = array[1];
//     }
//     return Users.findOne({facebookId: profile.id}).then(function(user){
//       // console.log(user);
//       if(user == null){
//         Users.insert({
//           facebookId: profile.id,
//           firstName: userFirstName,
//           lastName: userLastName
//         });
//       } else {
//         Users.findOne({facebookId: profile.id}, function(err, user){
//           // console.log(user);
//           done(null, {facebookId: profile.id, firstName: userFirstName, lastName: userLastName, token: accessToken})
//         })
//       }
//     })
//   }
// ));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/user-home');
//   });

// app.get('/auth/facebook',
//   passport.authenticate('facebook'));

// app.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });

// app.use(passport.session());

app.use(function(req, res, next){
  res.locals.user = req.user
  next()
})
app.use('/', routes);
app.use('/resorts', resorts);
// app.use('/leagues', leagues);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
