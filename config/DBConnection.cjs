const mongoose = require("mongoose");

const connectDb = async () => {
  const encodedPassword = encodeURIComponent(process.env.PASSWORD);
  const link = `mongodb+srv://${process.env.USER}:${encodedPassword}@cluster0.krkg35s.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
  try {
    const connect = await mongoose.connect(link);
    console.log(
      "Database Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
