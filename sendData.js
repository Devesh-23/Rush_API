require("dotenv").config();

const connectDB = require("./db/connect");
const link = require("./models/link");
const jsonLink = require("./data.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await link.deleteMany()
    await link.create(jsonLink)
    console.log("Sucess")
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
};


start()