import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import heroRoutes from './routes/heros.js';

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/heros', heroRoutes);

// https://www.mangodb.com/cloud/atlas

// const CONNECTION_URL = 'mongodb+srv://duyguadmin:duyguadmin8719@cluster0.91rjxbm.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5555;
console.log(process.env.CONNECTION_URL);
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
