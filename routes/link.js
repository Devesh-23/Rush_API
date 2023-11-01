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

const emptyScheme = new Schema({})

const DataModel = mongoose.model('Data', emptyScheme,'winget_package_list');

module.exports = DataModel;
