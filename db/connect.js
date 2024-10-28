import mongoose from "mongoose";


// export const connectDB = (url) => {
//   return mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
// }
 export const connectDB = (uri) =>{ mongoose.connect(uri).then(()=>{console.log('connecter to db');})
.catch(err=>{console.log(err);});}

// CommonJS syntax

//connect to db
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/MyDB', { useNewUrlParser: true })