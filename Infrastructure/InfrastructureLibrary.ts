// depends on authentication infrastructure
import Database from "./Database/connection";

export default function infrastructureLibrary(config: any){
   const db = new Database(config.getConfiguration('Database'));
   //db.connect();


   return {
      Database: db
   }
}
