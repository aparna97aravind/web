const express = require('express')
const app = express()
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')

app.use(fileUpload())
app.set("view engine", "ejs")
app.set(__dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));

let name = new Array;
let password = new Array;

app.get('/', (req, res) => {                         //GET METHOD
    res.sendFile(`${__dirname}/express.html`)
})

app.post('/aparna', (req, res) => {                  //POST METHOD

    password.push(req.body.password);
    name.push(req.body.username);
    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0)
    {
        return res.status(400).send('No files uploaded. Try again!');
    }
    sampleFile= req.files.sampleFile;
    uploadPath = (`${__dirname}/save/${sampleFile.name}`);
    sampleFile.mv(uploadPath, function (err)
    {
        if (err)
        {
            return res.status(500).send(err);
        }
    })
    //res.send('File uploaded!');
    res.render("index", {name, password});
})

app.listen(8080, () => {
    console.log("Now I am listening to 8080");
})