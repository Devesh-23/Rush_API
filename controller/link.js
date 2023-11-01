const Link = require("../models/link");

const getAllLinks = async (req, res) => {
  console.log("reahce here")
  const { PackageIdentifier } = req.query;
  // const resLink = {};
  // if (PackageIdentifier) {
  //   resLink.PackageIdentifier = { $regex: PackageIdentifier, $options: "i" };
  // }

  console.log(PackageIdentifier)
  const Links =await Link.find({ $text : { $search : "firefox" }})


  //const Links = await Link.findById("653e5ec2d22e5bdded9df60a");

  
  //const Links = await Link.find(resLink);
  // console.log(Links)
  res.status(200).json({noHits:Links.length, Links });
};

module.exports = {
  getAllLinks,
};
