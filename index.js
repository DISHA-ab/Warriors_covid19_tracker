// const express = require('express');
// const app = express();
// app.set('view engine','hbs');
// app.use('/assets/css',express.static('assets/css'));



// app.get('/', (req, res) => {
//     // res.sendFile("F:/cov19/views/index.hbs");
//     res.render("index");
// })

// app.get('/Signup', (req, res) => {
//     // res.sendFile("F:/cov19/public/signup.hbs");
//     res.render("signup");
// })

// app.get('/Login', (req, res) => {
//     // res.render("F:/cov19/public/login.hbs");
//     res.render("signup","");
// })




// app.listen(4040);


const express= require('express');
const path = require('path')
const data=require('./data/cov.json');
const app=express();
app.set('view engine','hbs');
console.log(data);
app.use(express.static(path.join(__dirname , './public')))
app.get('/',(req,res)=>
{
    res.render('index.hbs',{item:data})
    console.log(data);
    res.render('index.hbs',{allData:data})
})
app.get('/sign_up',(req,res)=>
{
    res.render('signup.hbs',{item:data})
    console.log(data);
    res.render('signup.hbs',{allData:data})
})
app.get('/login',(req,res)=>
{
    res.render('login.hbs',{item:data})
    console.log(data);
    res.render('login.hbs',{allData:data})
})
app.listen(8005,()=>
{
    console.log('listening on 8005');
});