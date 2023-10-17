const URL = require('./../models/url');
const shortId = require('shortid');

exports.handlegenerateNewShortUrl =  async (req,res)=>{
const body =req.body;
if (!body.url) return res.status(400).json({ error: 'url is required' })
const shortid = shortId();
console.log(shortid, body)

try{
    const createdURL = await URL.create({
            shortId: shortid,
            redirectURL: body.url,
            visitHistory: []
    })
    
  return res.json({
    shortid
  })

}
catch (error) {
    console.error('Error creating URL:', error);
    res.status(400).json({

        status: 'fail',
        message: 'Invaild url sent!'
    })

}

}


