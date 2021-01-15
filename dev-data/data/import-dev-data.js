const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//const Tour = require('../../models/tourModel');
const Review = require('../../models/reviewModel');
//const User = require('../../models/userModel');

dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );
//mongodb+srv://turatsinze:fvZ1sCfyO5630MtK@cluster0-p371t.mongodb.net/natours?retryWrites=true&w=majority
//'mongodb://localhost:27017/natours'
mongoose
  .connect('mongodb://localhost:27017/natours', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB Connection successful!');
  });

// READ JSON FILE
//const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
//const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    //await Tour.create(tours);
    await Review.create(reviews);
    //await User.create(users, { validateBeforeSave: false });
    console.log('Data successfully loaded!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    //await Tour.deleteMany();
    await Review.deleteMany();
    //await User.deleteMany();
    console.log('Data successfully deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
