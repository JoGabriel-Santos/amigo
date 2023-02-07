import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

import userRouter from "./routes/user.js";
import visitsRouter from "./routes/visits.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/visits", visitsRouter);

const CONNECTION_URL = "mongodb+srv://amigo:esNY6ySpOdiIVSLq@amigo.ny0r7fb.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port: ${ PORT }`);
    }))
    .catch((error) => {
        console.log(error.message);
    });