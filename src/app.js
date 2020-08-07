const express = require('express');
const cors = require('cors');
const dotnet = require('dotenv');

const connectDB = require('./config/db');
const connectServer = require('./index');

const app = express();
dotnet.config();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectServer(app);
