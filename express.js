const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.post('/aparna',(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.render('response.html',{username,password});
});

app.get('/', (req, res) =>
{
    res.sendFile( __dirname + '/express.html');
})
app.listen(8080, () =>
{ // listening to the port
    console.log("Now I am Listening to the port");
})

app.use((req,res) =>
{
    console.log("New request arrived");
})