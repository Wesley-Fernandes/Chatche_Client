import { Authentify } from "../../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";


export default function NewLogin(email, pass){
    
    signInWithEmailAndPassword(Authentify, email, pass)
      .then((response) => {
        const user = response.user;
        const email = user.email;
        localStorage.setItem("email", `${email}`);
      })
      .catch((error) => {
        alert(error);
      });
  }
