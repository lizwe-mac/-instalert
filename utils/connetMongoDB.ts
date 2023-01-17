import React from 'react'
import mongoose from 'mongoose';
import { exit } from 'process'

const connectMongoDB =async () => {
    try {
      console.log("DB:", process.env.NEXT_PUBLIC_DB_STRING);
      const conn = await mongoose.connect(process.env.NEXT_PUBLIC_DB_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "instalert",
      });
  
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.log(error);
      exit(1);
    }
  };
  
export default connectMongoDB