import mongoose from 'mongoose';

export const connectToDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/placementCell');
    console.log('connected to db');
  } catch (error) {
    console.log('error connecting to db');
  }
};