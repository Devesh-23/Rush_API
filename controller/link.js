const Link = require('../models/link')

const getAllLinks = async (req, res) =>{

    const Links = await Link.find({})
    res.status(200).json({nbHits: Links.length, Links})
}

module.exports = {
    getAllLinks 
}