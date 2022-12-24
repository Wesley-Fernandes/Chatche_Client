import React from "react";
import './index.sass'
export default function Msg(message){
  const {from, msg, name, room} = message.datas;

  const email = localStorage.getItem("email");
  const MyUsername = email.split("@");


  

  if(name!==MyUsername){
    return(
      <div className="Msg--box">
      <div className="received">
        <div className="info">
          <span>{name}</span>
          <img
            src="https://cetcc.com.br/giga_site_git/public/cetcc/img/user/user.png"
            alt="Foto de usuario"
          />
        </div>
        <p>
          {msg}
        </p>
      </div>
    </div>
    )
  }else{
    return (

      <div className="Msg--box">
      <div className="sent">
  
        <p>
          {msg}
        </p>
        <div className="info">
          <span>{name}</span>
          <img
            src="https://cetcc.com.br/giga_site_git/public/cetcc/img/user/user.png"
            alt="Foto de usuario"
          />
        </div>
      </div>
    </div>
  )
    }
;
}
