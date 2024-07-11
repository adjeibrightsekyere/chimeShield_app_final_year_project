const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const DataModel = require("./models/data");
const EmployeeModel = require('./models/Employee')
const nodemailer = require('nodemailer');


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

app.get('/search', async (req, res) => {
    const { date } = req.query;
    try {
        const data = await DataModel.find({ date: date });
        res.json(data); 
    } catch (err) {
        res.status(500).json({ error: err.messsage});
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

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'paakwasisensor@gmail.com',
        pass: 'paasensor'
    }
});
app.post('/contact', (req, res) => {
    const {first, last, email, phone, message } = req.body;
   
    if (!first || !last || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields are required'});
    }

    const mailOptions = {
        from: email,
        to: 'paakwasisensor@gmail.com',
        subject: `Contact Form Submission from ${first} ${last}`,
        text: `You have a new message from ${first} ${last}.\n\nContact Details:\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        
    };

    transporter.sendMail(mailOptions, (error,info) => {
        if(error) {
            console.log('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send message'});
        }
        console.log('Email sent successfully:', info.response)
        res.status(200).json({ message: 'Message sent successfully'});
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});