const Link = require("../models/link");

const getAllLinks = async (req, res) => {
  const { PackageIdentifier } = req.query;
  const resLink = {};
  if (PackageIdentifier) {
    resLink.PackageIdentifier = { $regex: PackageIdentifier, $options: "i" };
  }

  console.log(resLink)
  
  const Links = await Link.findById("653e5ec2d22e5bdded9df607");
  // console.log(Links)
  res.status(200).json({ Links });
};

module.exports = {
  getAllLinks,
};
