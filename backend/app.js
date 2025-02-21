const dotenv=require('dotenv');
dotenv.config();
// keep dotenv at top so that the envrmnt variables get configured at first
// dotenv protects sensitive data, and cors fixes frontend-backend connection issues. 

const express=require('express');
const cors=require('cors')
const app=express();

app.use(cors());
// now we are accepting requests from all frontend websites (only durign the developmnt phase) but durign the production we will restrict it to only 1 domain
app.get('/',(req,res)=>{
    res.send("Shakti Priya");
});

module.exports=app;