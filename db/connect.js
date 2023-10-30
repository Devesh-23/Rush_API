const mongoose = require('mongoose')
//mongoose.set('useFindAndModify', false);

const connectDB = (url) => {
  // console.log(url)
  return mongoose.connect(url, {

  })
}

module.exports = connectDB
