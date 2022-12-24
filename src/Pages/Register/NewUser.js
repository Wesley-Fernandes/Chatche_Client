import { createUserWithEmailAndPassword} from "firebase/auth";
import {Authentify} from "../../Firebase/firebase"
import { useNavigate } from "react-router-dom";


export default function NewUser(email, password){
    createUserWithEmailAndPassword(Authentify, email, password)
    .then(async (userCredential)=>{
        const id = userCredential.user.uid

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
    });
}