// dbConnect.js
const mongoose = require('mongoose');

// Define the connectDB function to establish a MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:D548Xy6asHGmc5mH@krishiraj.0kovs.mongodb.net/FootballDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connectDB function
module.exports = connectDB;
