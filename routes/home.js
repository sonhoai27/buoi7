//de chay cung mot server, router
//de chia  nhỏ router ra
let express = require('express')
let router = express.Router();
let parser = require('body-parser').urlencoded({extended: false} )

let mangTin = require('../Tin.js')

router.get('/show', (req, res)=>{
  res.render('home', {user: 'SonLam',
                      mangTin: mangTin
                      })
})
//su dung lai bien router trong file app.js
router.post('/show', parser, (req, res)=>{
  res.send(req.body) //gởi nhiêu thì nhận về hết
  console.log('Post Router');
})

module.exports = router
