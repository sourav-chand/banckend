// //require('dotenv').config({path : "./env"})
// import dotenv from "dotenv"

// import connectDB from "./db/index.js";
// dotenv.config({
//     path:"./env"
// })

// connectDB()

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));




// new code 3/10/2024

// const app = express();
// (async ()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error ", (error)=>{
//             console.log("error",error);
//             throw error
            
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening${process.env.PORT}`);
            
//         })
        
//     } catch (error) {
//         console.error("Error:", error)
//         throw error
//     }
// })()


import dotenv from "dotenv"
import connectDB from './db/index.js';
dotenv.config({
    path : './env'
})

connectDB()