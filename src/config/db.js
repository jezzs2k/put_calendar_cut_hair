const { connect } = require('mongoose');

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('MongoDb connect ....');
  } catch (err) {
    console.error('Connect error');
  }
};

module.exports = connectDB;
