const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sunil123:phobinos123@cluster0.dbuyq8v.mongodb.net/kiranaghar?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log(`Mongodb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
