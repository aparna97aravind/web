const express = require('express')
const app = express()
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')

app.use(fileUpload())
app.set("view engine", "ejs")
app.set(__dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/aparna', (req, res) => {                  //POST METHOD

    name =req.body.username;
    password= req.body.password;
    //res.send('File uploaded!');
    res.render("index", {name, password});
})
app.get('/', (req, res) => {                         //GET METHOD
         res.sendFile(`${__dirname}/express.html`)
    })
app.listen(8000, () => {
    console.log("Now I am listening to 8000");
})
// var express = require('express');
// var app = express();
// var PORT = 3000;
 
// // With middleware
// app.use('/', function(req, res, next){
//     res.links({
//         next: 'http://demo.com?page=2',
//         middle: 'http://demo.com?page=4',
//         last: 'http://demo.com?page=6'
//     });
//     next();
// })
 
// app.get('/', function(req, res){
//     console.log(res.get('link'));
//     res.send();
// });
 
// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });