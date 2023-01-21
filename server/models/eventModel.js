// getting-started.js
const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    'mongodb+srv://francois:”MN7s20IhEKCnNudZ”@cluster0.mntpk3e.mongodb.net/?retryWrites=true&w=majority'
  );

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
