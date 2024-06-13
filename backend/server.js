const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const DataModel = require("./models/data");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = "mongodb+srv://paakwasisensor:kwesman@cluster0.kbgqogf.mongodb.net/Card?retryWrites=true&w=majority"
   
mongoose.connect(mongoURI

).then(() => {
    console.log('connected to MongoDB');
}).catch(err => {
    console.log('error connecting to MongoDB:', err.message);
    process.exit(1);
})


app.get('/getData', async (req,res) => {
   try{
    const data = await DataModel.find();
    console.log('Response:',data);
    res.json(data);
   }catch(err) {
    res.status(500).json({ error: err.message});
   }
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});