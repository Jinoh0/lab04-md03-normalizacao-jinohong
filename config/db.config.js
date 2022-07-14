const mongoose = require("mongoose");
async function connect() {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to DB:", dbConnect.connection.name);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

module.exports = connect;
