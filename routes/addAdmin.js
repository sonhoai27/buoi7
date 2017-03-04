let express = require('express')
let router = express.Router();
let parser = require('body-parser').urlencoded({extended: false} )

let {mangTin, Tin} = require('../Tin.js')
router.get('/add', (req, res)=>{
  res.render('addInfoAdmin', {user: 'SonLam'})
})
router.post('/add', parser, (req, res)=>{
  let {title, desc, date, image} = req.body;
  let tin = new Tin(title, date, desc, image);
  mangTin.push(tin);
  res.redirect('/admin');

})

//vi sao xoa addmin vi cai router nay no la tu admin qua nen ko cam admin/xoa/:index
router.get('/xoa/:index', (req, res) => {
  let {index} = req.params;
  mangTin.splice(index, 1);
  res.redirect('/admin');
});

router.get('/sua/:index', (req, res) => {
  let {index} = req.params;
  res.render('updateInfo', {tin: mangTin[index], index})
});

router.post('/sua', parser, (req, res) => {
  let {title, desc, date, image, index} = req.body;
  console.log(req.body);
  let tin = new Tin(title, date, desc, image);
  mangTin[index] = tin;
  res.redirect('/admin');
});

module.exports = router
