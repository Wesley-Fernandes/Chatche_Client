import React, { useEffect } from "react";
import './index.sass'
import icon from "../../Img/icon.png";
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { Authentify } from '../../Firebase/firebase';
import Exit from "./Exit"
export default function Header(){
  const Navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(Authentify, (user)=>{
      if(user){

      }else{
        Navigate('/login')
      }
    })})
    
return(
  <header className="HeaderTop">
    <div className="logo">
      <img src={icon} alt="icon" />
    </div>

    <div className="exit">
      <button onClick={Exit}>Deslogar</button>
    </div>
  </header>
)
}

