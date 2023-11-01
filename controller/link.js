const Link = require("../models/link");

const getAllLinks = async (req, res) => {
  const { PackageIdentifier } = req.query;
  // const resLink = {};
  // if (PackageIdentifier) {
  //   resLink.PackageIdentifier = { $regex: PackageIdentifier, $options: "i" };
  // }

  console.log(PackageIdentifier)

  const Links = await Link.findById("653e5ec2d22e5bdded9df62e");

  
  //const Links = await Link.find(resLink);
  // console.log(Links)
  res.status(200).json({noHits:Links.length, Links });
};

module.exports = {
  getAllLinks,
};
