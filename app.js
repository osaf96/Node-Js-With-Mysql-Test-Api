require('dotenv').config();
const express = require('express');
const app = express();
const authRouter = require("./api/router/auth/auth-route"); 


app.use(express.json());
 app.use("/api/auth",authRouter);


app.listen(process.env.PORT,()=>{
    console.log("server is runnning on port "+process.env.PORT);
})