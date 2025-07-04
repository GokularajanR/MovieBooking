import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './database/db.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

import sampleRoutes from './routes/sampleRoutes.js';
app.use('/api/sample', sampleRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));