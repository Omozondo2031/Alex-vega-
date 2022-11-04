//Declearation Of Npm 
const express = require ('express');

const dotenv = require ('dotenv');
const connectDB = require ('./config/db');
const User = require ('./models/schema.js');
const router = require ('./routes/taskRoutes');
dotenv.config  ({path: './config/config.env'})

//Involking The Express
const app = express();
//Calling/Involking The Database From The Database File

const PORT = process.env.PORT || 3000

//Waiting For MongoDB To Connect Before Listenning For Request
const connectServer = async()=> {
 try {
  await connectDB();
  app.listen(PORT, ()=> {
   console.log(`server is listenning for request and running on port${PORT}`)
  });
 } catch (error) {
  console.log(error)
 }
};
connectServer();


//Declearing Express Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)