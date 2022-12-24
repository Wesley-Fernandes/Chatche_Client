import React from 'react'
import {RiWechat2Fill} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom'

import "./index.sass"

export default function Chat({room, name}) {
    const navigate = useNavigate()

  return (
    <div className='chat--room'
    onClick={()=>{navigate(`/room?roomchat=${room}`)}}>
            <div className='chat--name'>
              <h3>{name}</h3>
            </div>
            <div className='chat--info'>
            <span>1/200 <RiWechat2Fill/></span>
        </div>
    </div>
  )
}
