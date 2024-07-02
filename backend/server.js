const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const DataModel = require("./models/data");
const EmployeeModel = require('./models/Employee')


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

app.post('/signin', (req, res) => {
    const {username, password} = req.body;
    EmployeeModel.findOne({username: username})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No records exist")
        }
    })
})

app.post('/signup', (req, res) => {
    EmployeeModel.create(req.body)
    .then(signup => res.json(signup))
    .catch(err => res.json(err))
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});