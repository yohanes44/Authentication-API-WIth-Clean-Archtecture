import express from 'express';
import mongoose from 'mongoose';
import infrastructureLibrary from "./Infrastructure/InfrastructureLibrary";
import ApplicationLibrary from "./Application/ApplicationLibrary"
import fs from "fs";

const app =  express();

// const mf = JSON.parse(configFile);
//  console.log(configFile.DB);

import ConfigurationService from "./Service/ConfigurationService";

const configuration = new ConfigurationService('configuration.json');
const port = configuration.getConfiguration('PORT');

 const infrastructure = infrastructureLibrary(configuration);
 const application  = ApplicationLibrary(
    infrastructure.Database
 )


// console.log(configuration.getConfiguration('Database'));




app.get("/", (req, res)=>{
    res.status(200).json({
        Message: "Welcome to Authentication API Microservice",
        Success: true
    });
})

fs.readdirSync("Controller").forEach(function (file) {
    if (file.substr(-3) == ".ts") {
        const route = require("./Controller/" + file);
        // console.log(route);
        route.controller(app, application);
    }
});




app.listen(port, ()=>{
    console.log("Server is listening on port ", port);
})







