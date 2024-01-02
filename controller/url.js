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



exports.allUrl = async (req, res) => {
  try {
    const allUrls = await URL.find({}); 

    return res.status(200).json({
      allUrls
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
};


exports.analytics  = async(req,res)=>{
const shortId = req.params.shortId;
const result  = await URL.findOne({ shortId});
return res.json({
  totalClicks: result.visitHistory.length,
  analytics: result.visitHistory
});

}

