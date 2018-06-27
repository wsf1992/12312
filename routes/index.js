var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'C1oudP8x&2017',
  database: 'book1'
})
connection.connect(function (err) {
  if (err) {
    console.error('数据库链接失败');
    return;
  }
  console.log('已成功链接数据库');
})

/* GET home page. */
router.get('/booklist', function (req, res, next) {
  if(req.query.id){
    connection.query('select * from booklist where id = ?', Number(req.query.id),function (err, results, fields) {
      if (err) {
        res.send('err')
      }
      res.send(results[0])
      // console.log(fields)
    })
  }else{
    connection.query('select * from booklist', function (err, results, fields) {
      if (err) {
        res.send('err')
      }
      res.send(results)
      // console.log(fields)
    })
  }
});

router.get('/titles', function (req, res, next) {
  if(req.query.id){
    connection.query('select * from booktitles where id = ?', Number(req.query.id),function (err, results, fields) {
      if (err) {
        res.send('err')
      }
      res.send(results[0])
      // console.log(fields)
    })
  }else{
      res.send('请传入id')
  }
});



router.get('/type', function (req, res, next) {
  if (!req.query.type) {
    res.send('请传入type值');
    return;
  }
  let types = '';
  switch (Number(req.query.type)) {
    case 1:
      types = '玄幻';
      break;
    case 2:
      types = '修真';
      break;
    case 3:
      types = '都市';
      break;
    case 4:
      types = '历史';
      break;
    case 5:
      types = '网游';
      break;
  }
  connection.query("select * from booklist where type = ?", types, function (err, results, fields) {
    if (err) {
      res.send('err')
    }
    res.send(results)
    // res.send('1111111111111111111111')
    // console.log(fields)
  })
})






router.get('/book', function (req, res, next) {
  if (!req.query.book) {
    res.send('请传入book值');
    return;
  }
  if (!req.query.id) {
    res.send('请传入id值');
    return;
  }
  connection.query("select * from book" + Number(req.query.book) + " where id = ?", Number(req.query.id), function (err, results, fields) {
    if (err) {
      res.send('err')
    }
    console.log(fields)
    
    res.send(results[0])
    // res.send('1111111111111111111111')
  })
})

module.exports = router;
