import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import learningSpaceRoutes from './routes/learningSpaces.js';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(express.json({limit:'300mb'}));
app.use(cors());
app.use(morgan('common'));

app.use('/learning-spaces',learningSpaceRoutes);
app.use(`/learning-spaces/learning-space/:id/posts`,postRoutes);

mongoose.connect(process.env.LOCAL_CONNECTION)
    .then(() => morgan('common'))
    .catch((err) => console.log(err));

app.listen(process.env.PORT,() => console.log(`Server Connection on Port:${process.env.PORT}`));