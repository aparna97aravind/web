const express = require('express')
const app = express()
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
//app.use(bodyParser.json())
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));


 app.use(fileUpload())
//  app.set("view engine", "html")
//  app.set(__dirname);

// let name = new Array;
// let password = new Array;

app.get('/', (req, res) => {                         //GET METHOD
    res.sendFile(`${__dirname}/express12.html`)
})
app.listen(8080, () => {
    console.log("Now I am listening to 8080");
})

app.post('/aparna',function (req, res)
{

    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0)
    {
        return res.status(400).send('No files uploaded. Try again!');
    }
    sampleFile = req.files.filename;
    uploadPath = (`${__dirname}/save/${sampleFile.name}`);
    sampleFile.mv(uploadPath, function (err)
    {
        if (err)
        {
            return res.status(500).send(err);
        }
    })
    res.json({
        status: true,
        message: 'File is uploaded !!!',
        data: {
            username: req.body.Username,
            password: req.body.Password,
            size: sampleFile.size,
            url : uploadPath
        }
    });
})
