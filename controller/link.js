const Link = require("../models/link");

const getAllLinks = async (req, res) => {
  const { PackageIdentifier } = req.query;
  const resLink = {};
  if (PackageIdentifier) {
    resLink.PackageIdentifier = { $regex: PackageIdentifier, $options: "i" };
  }

  
  const Links = await Link.find(resLink);
  // console.log(Links)
  res.status(200).json({noHits:Links.length, Links });
};

module.exports = {
  getAllLinks,
};
