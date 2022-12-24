import React from 'react'
import './index.sass'
import {useNavigate} from "react-router-dom"
import Button from '../../components/Button'
import Input from '../../components/Input'
import NewUser from "./NewUser"
import logo from "../../Img/icon.png"




export default function Register() {
  const [email, setEmail] = React.useState("")
  const [pass, setPass] = React.useState("")
  const [repass, setRepass] = React.useState("")

  const Navigate = useNavigate()

  function Default(e){
    e.preventDefault()
  }
  async function Submit(e) {
    alert("enviado!")
    if(pass!== repass) {
      return alert("Passwords do not match")
    }else{
      NewUser(email, pass, repass)
    }
  }

  function toLogin(){
    Navigate("/")
  }
  return (
    <main className='homepages'>
      <div className='left'/>
      <form onSubmit={(e)=>{Default(e)}} className="right">
        
        <img src={logo} alt="logotipo" />
          <h3>Crie sua conta</h3>
          <Input
            type="email"
            placeholder='Digite seu e-mail...'
            title="Escolher o e-mail"
            changer={setEmail}
            width="true"
            onChange={(e)=>{setEmail(e.target.value)}}/>

          <Input
            type="password"
            placeholder='Digite sua senha...'
            title="Criar senha"
            width="true"
            onChange={(e)=>{setPass(e.target.value)}}/>

          <Input
            type="password"
            placeholder='Re-digite sua senha...'
            title="Verificar senha"
            width="true"
            onChange={(e)=>{setRepass(e.target.value)}}/>

          <hr />
          <Button
            make={Submit}
            text='Criar conta'
            width={true}
            background='success'/>
          <Button
            make={toLogin}
            width={true}
            text='Já tenho conta'/>
        </form>
    </main>
  )
}
