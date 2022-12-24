import React, { useEffect } from 'react'


import {useNavigate} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth'
import { Authentify } from '../../Firebase/firebase';

import Chat from "./Chat"
import "./index.sass"

import Header from "../../components/Header"
export default function Dashboard() {
  const Navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(Authentify, (user)=>{
      if(user){

      }else{
        Navigate('/')
      }
    })
  })
  return (
    <div className='DashboardPage'>
      
      <Header/>
      <main>
        <div className='chats'>
          <Chat room={"Gremistas"} name={"Gremistas"} />
          <Chat room={"Colorados"} name={"Internacional"}/>
        </div>
      </main>
    </div>
  )
}
