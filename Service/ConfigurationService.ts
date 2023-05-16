
import fs from "fs";



export default class ConfigurationService{


    public fileAddress;

    constructor(fileAddress: any){
        this.fileAddress = fileAddress;
        
        if(!fs.existsSync(this.fileAddress)){
            throw new Error('configuration file not exist')
        }
    }


    getConfiguration(confName: any){
        var configFile = JSON.parse(fs.readFileSync(this.fileAddress, { encoding: 'utf8' }))

        if(configFile[confName] == null){
            throw new Error(`configuration file name ${confName} do not exist`);
        }
        return configFile[confName]; 
    }


    setConfiguration(confName: any, value: any){
        var configFile = JSON.parse(fs.readFileSync(this.fileAddress, { encoding: 'utf8' }))

        if(configFile[confName] == null){
            throw new Error(`configuration file name ${confName} do not exist`);
        }
        configFile[confName] = value;
        fs.writeFileSync(this.fileAddress, JSON.stringify(configFile), { encoding: 'utf8' })
                
    }


}