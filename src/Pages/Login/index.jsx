import React, { useEffect } from 'react'
import NewLogin from "./NewLogin"
import Button from '../../components/Button'
import Input from '../../components/Input'
import {useNavigate} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import { Authentify } from '../../Firebase/firebase'
import logo from "../../Img/icon.png"
import "./index.sass"
export default function Login() {
  const [email, setEmail] = React.useState("")
  const [pass, setPass] = React.useState("")
  const Navigate = useNavigate()

  function toCreate(){
    Navigate("/register")
  }

  useEffect(()=>{
    onAuthStateChanged(Authentify, (user)=>{
      if(user) {
        Navigate("/dashboard")
      }
    })
  })



  function Submit(e){
    e.preventDefault();
    if(!email ||!pass){
      alert("Please enter a valid email address!");
    }else{
      NewLogin(email, pass)
    }
  }
  return (
    <main className='homepages'>
      <div className='left'/>
        <form
          className='right'
          onSubmit={(e)=>{handleSubmit(e)}}>
            <img src={logo} alt="logotipo" />
          <h3>Entrar na sua conta</h3>
          <Input
            title='Meu email'
            width="true"
            type="email"
            changer={setEmail}/>
          <Input
            title='Sua senha'
            width="true"
            type="password"
            changer={setPass}/>

          <hr />
          <Button
            make={Submit}
            key="1"
            width={true}
            text='Fazer login'
            background='success'/>
          <Button
            key="2"
            width={true}
            text='Criar uma conta'
            make={toCreate} />
        </form>
    </main>
  )
}
