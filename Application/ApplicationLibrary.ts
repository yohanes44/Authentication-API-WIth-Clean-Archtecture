import registerUserHandler from "./AuthModule/registerCommand";


export default function (db: any) {

    return {
        authModule: {
            createUserRequest: async function(){
                return  new registerUserHandler(db).register();
            }

        }
    }
}