var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add', function(req,res){
  res.render('AddForm');
})

router.get('/store', function(req,res){
  res.render('store')
})

router.get('/login',function(req,res){ 
  res.render('login')
})

router.get('/signup',function(req,res){ 
  res.render('login')
})

module.exports = router;
