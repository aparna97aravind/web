
const express = require("express"); //include Express
//console.log("hello I am inside");
const web = express();
//console.dir(web);
const bodyParser = require('body-parser');
web.use(bodyParser.urlencoded({ extended: false }));

web.post('/aparna', (req, res) =>
{
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});
 
web.get('/', (req, res) =>
{
    res.sendFile( __dirname + '/express.html');
})
 
web.listen(8080, () =>
{ // listening to the port
    console.log("Now I am Listening to the port");
})
 
web.use((req,res) =>
{
    console.log("New request arrived");
})