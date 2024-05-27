import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';
import express, { json } from 'express';

import {config} from 'dotenv'
const app = express()
config()
import routes from './Routes/authRoutes.js';

const database = 'BaxCricket'
const uri = 'mongodb+srv://kp2103:Abcd%401234@cluster1.2murfo5.mongodb.net/'+database+'?retryWrites=true&w=majority';

// use for middleware
app.use(express.json())
app.use(cookieParser())

app.use('/',routes)


connect(uri,{ 
    useNewUrlParser: true, 
}).then(() => {
    console.log('MongoDB Atlas connected successfully');
  }).catch((error) => {
    // app.use((req,res,next)=>{
    //   res.clearCookie('userData')
    //   next()
    // })
    console.error('Error connecting to MongoDB Atlas:', error);
  });

app.listen(4000,()=>{
    console.info('Hello server started')
})
