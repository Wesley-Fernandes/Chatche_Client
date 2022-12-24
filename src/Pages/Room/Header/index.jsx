import React from 'react'
import './index.sass'
import { useNavigate } from 'react-router-dom'
import {IoChevronBackCircle}from 'react-icons/io5'

export default function Header() {

  const fullURL = window.location.href
  const partsURL = fullURL.split("=");
  const room_name = partsURL[1];

  const navigate = useNavigate();


  return (
    <header className='HeaderRoom'>
      <div className='left'>
        <IoChevronBackCircle onClick={()=>{navigate('/dashboard')}}/>
      </div>
      <div className='right'>
        <h1>Você está na sala {room_name}</h1>
      </div>

    </header>
  )
}
