const {DataModel,DataModelFull} = require("../models/link");

const getAllLinks = async (req, res) => {
  console.log("reahce here");
  const { PackageIdentifier } = req.query;
  // const resLink = {};
  // if (PackageIdentifier) {
  //   resLink.PackageIdentifier = { $regex: PackageIdentifier, $options: "i" };
  // }
  const qu = req.query.searchquery;

  console.log(qu);

  const Links = await DataModel.find({ $text: { $search: qu } });

  res.status(200).json({ noHits: Links.length, Links });
};
const getAppById = async (req,res) => {

  const appName = req.params.appName;
  const app = await DataModelFull.find({PackageIdentifier:appName})
  console.log(appName)

  
  

  res.status(200).json({app})

}
module.exports = {
  getAllLinks,
  getAppById
};

