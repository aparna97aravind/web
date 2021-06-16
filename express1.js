const express = require('express')
const app = express()
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')

app.use(fileUpload())

app.set("view engine", "ejs")
app.set(__dirname + '/import');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/express.html`)
})

app.post('/aparna', (req, res) => {

    const password = req.body.password;
    const username= req.body.username;
    let sampleFile;
    let uploadPath;
    
    //res.render("index", {username, password});

    if (!req.files || Object.keys(req.files).length === 0)
    {
        return res.status(400).send('No files uploaded.');

    }
    // The name of the input file sampleFile
    sampleFile= req.files.sampleFile;
    uploadPath = (`${__dirname}/save/${sampleFile.name}`);

    sampleFile.mv(uploadPath, function (err) {
        if (err)
        {
            return res.status(500).send(err);
        }
    })
    
    res.render("index", {username, password});

})

app.listen(8080, () => {
    console.log("Now I am listening to 8080");
})