
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log('Connected to Mongodb ')
})
const app = require("./app");

app.listen(3001,()=>console.log('Server is running at 3001'));