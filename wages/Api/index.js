const express = require('express')
const bodyParser = require('body-parser')
// var cors = require('cors')
const connect = require('./dbUtil/dbConnect')
const cookie = require('cookie-parser')
const resSend = require('./dbUtil/resSend')
const app = express()
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*'); //需要显示设置来源
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Credentials",true); //带cookies
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
app.use(cookie())

app.post('/api/login', function (req, res) {
  // console.log(req.body)
  const {
    username,
    userpwd
  } = req.body
  let sql = 'select * from wages'
  connect.query(sql, [
    username,
    userpwd
  ], (error, result) => {
    if (error) {
      console.log('失败11')
    } else {
      console.log(result)
      if (result.length >= 1) {
        res.cookie('token', 'asdgjwquyjegq87126312uh3879213jhsaidb872qe4', { expires: new Date(Date.now() + 900000), httpOnly: true })
        res.send(result[0])
      } else {
        res.status(401).send({
          msg: '用户名密码错误'
        })
      }
    }
  })
})
app.get('/api/getlist', function (req, res) {
  const {
    page = 1,
    pageSize = 10
  } = req.query
  console.log(req.query)
  let sql = 'select count(*) num from user'
  connect.query(sql, [], (error, result) => {
    if (error) {
      console.log('失败')
    } else {
      console.log(result[0].num)
      let nums = result[0].num
      // let whereStr = ''
      // sql = 'select * from user'
      // sql += whereStr + 'order by id desc limit ?,?'
      let sql = 'select * from user order by id desc limit ?, ?'
      connect.query(sql, [
        parseInt(page * pageSize),
        parseInt(pageSize)
      ], (error, result) => {
        if (error) {
          console.log('失败')
        } else {
          console.log(result)
          resSend(req, res, {
            data: {
              count: nums,
              data: result
            }
          })
        }
      })
    }
  })
  // let sql = 'select count(*) num from user'
  // connect.query(sql, [], (error, result) => {
  //   if (error) {
  //     console.log('失败')
  //   } else {
  //     let nums = result[0].num
  //     let whereStr = ''
  //     sql = 'select * from user'
  //     sql += whereStr + 'order by id desc limit ?,?'
  //     // console.log(sql)
  //     connect.query(sql, [
  //       parseInt(page * pageSize),
  //       parseInt(pageSize)
  //     ], (error, result) => {
  //       if (error) {
  //         console.log(error)
  //       } else {
  //         resSend(req, res, {
  //           count: nums,
  //           data: result
  //         })
  //       }
  //     })
  //   }
  // })
  // connect.query(sql, [
  //   page,
  //   pageSize
  // ], (error, result) => {
  //   if (error) {
  //     console.log('失败')
  //   } else {
  //     res.send(result)
  //   }
  // })
})
app.post('/api/addStaffs', function (req, res) {
  const {
    name,
    phone,
    team
  } = req.body
  let sql = 'insert into user (name, phone, team) values (?, ?, ?)'
  connect.query(sql, [
    name,
    phone,
    team
  ], (error, result) => {
    if (error) {
      console.log('失败')
    } else {
      resSend(req, res, result)
    }
  })
})
app.listen(8088, function (err) {
  if (err) {
    console.log('报错')
  }
})
