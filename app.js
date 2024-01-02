const express = require("express");
const cors = require('cors');
const urlRoute = require('./routes/url');
const userRoute = require('./routes/user')
const URL = require('./models/url')
const app = express();



// Middleware

app.use(cors());
app.use(express.json());


app.get('/:shortId' , async (req,res) =>{
    const shortId = req.params.shortId;
    // console.log(shortId)
    const entry = await URL.findOneAndUpdate({
        shortId
    },{
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }    } 
    )
    if (!entry) {
        return res.status(404).send('URL not found');
    }
    // const fullURL = 'http://www.example.com';
    // res.redirect(fullURL);
    
console.log(entry.redirectURL)
    res.redirect(entry.redirectURL)
    // res.json(entry)
});


// Mounting routes
app.use('/url',urlRoute);
app.use('/user',userRoute);


app.use((req, res, next) => {
    console.log('Hello from Middleware ');
    next();
});



module.exports = app;