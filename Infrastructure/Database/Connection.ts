import mongoose from "mongoose";
import fs from "fs";

export default class Database{

    // var configFile = JSON.parse(fs.readFileSync("configuration.json", { encoding: 'utf8' }))
    // configFile = JSON.parse(configFile);

    // public configuration: any;
    public database: any;
    public MongoUrl: any;

    constructor(database: any){
        this.database = database;
        this.MongoUrl = database.MongoUrl; 
    }

    connect(){
        mongoose.connect(this.MongoUrl);

        mongoose.connection.on("connected", () => {
            console.log("DB connected succesfully");
        })

        mongoose.connection.on("disconnected", () => {
            console.log("DB connected succesfully");
        })
    }
};