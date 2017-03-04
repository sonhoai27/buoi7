let express = require('express')
let app = express()
let parser = require('body-parser').urlencoded({extended: false} )
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

app.listen(process.env.PORT || 3000, ()=>console.log('Server Started'))

app.get('/', (req, res)=>{
  res.render('index')
})

let {mangTin} = require('./Tin.js')
app.get('/admin', (req, res)=>{
  res.render('admin', {mangTin})
})

//sử dụng router
app.use('/home', require('./routes/home.js'))
app.use('/admin', require('./routes/addAdmin.js'))
