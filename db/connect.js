const mongoose = require('mongoose')


//c//onst AllTaskCollection = mongoose.model("Task", ObsyTaskSchema);

const connectDB = (url) => {
  // console.log(url)
  return mongoose.connect(url, {

  })
}

module.exports = connectDB
