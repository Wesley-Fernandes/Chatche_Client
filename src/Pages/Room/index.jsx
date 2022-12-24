
import React, { useEffect, useState} from 'react'
import {Socket, io} from 'socket.io-client'
import Msg from '../../components/Msg'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import './index.sass'




const Home = () => {
  const [data, setData] = useState([]);
  const [id, setID] = useState("");
  const socket = io(import.meta.env.VITE_SERVERADDRESS);


  useEffect(()=>{
    const fullURL = window.location.href;
    const partsURL = fullURL.split("=");

    socket.on('connect', ()=>console.log(socket.id))
    socket.emit('room', {room: partsURL[1]});

    if(!data){
      socket.on('chat message', (archive)=>{
        const {from, msg, name, room} = archive
        setData([{from, msg, name, room}])
      })
    }else{
      socket.on('chat message', (archive=>{
        const {from, msg, name, room} = archive
        setData([...data, {from, msg, name, room}])
      })
    )}

    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),3000)
    })
  })

  function send(value){
    const fullURL = window.location.href
    const partsURL = fullURL.split("=");
    const email = localStorage.getItem("email");
    const name = email.split("@");

    socket.emit('chat message',
    {from: 'sent', msg: value, name:name[0], room: `${partsURL[1]}`});
  }


  return (
    <div className='Room'>
      <Header/>
      <Main>
        {data?.map((menssage, index)=>{
          return (<Msg datas={menssage} key={index} />)
        })}
      </Main>
      <Footer send={send}/>
    </div>
  )
}

export default Home;