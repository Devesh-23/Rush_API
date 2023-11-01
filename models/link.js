const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const installerSchema = new Schema({
  Architecture: String,
  InstallerUrl: String,
  InstallerSha256: String,
  ProductCode: String,
});

const packageSchema = new Schema({
  PackageVersion: String,
  ManifestType: String,
  ManifestVersion: String,
  PackageLocale: String,
  Publisher: String,
  PackageName: String,
  License: String,
  LicenseUrl: String,
  Copyright: String,
  ShortDescription: String,
  Installers: [installerSchema],
});

const dataSchema = new Schema({
  PackageIdentifier: String,
  Packages: [packageSchema],
});

<<<<<<< HEAD
const emptySchema = new Schema({})

const DataModel = mongoose.model('Data', emptySchema,'winget_package_list');
=======
const emptyScheme = new Schema({})

const DataModel = mongoose.model('Data', emptyScheme,'winget_package_list');
>>>>>>> 522edbf719e7f25107341e7785d3959692e65d6c

module.exports = DataModel;
