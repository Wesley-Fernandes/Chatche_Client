import TextField from '@mui/material/TextField'
import "./index.sass"
import React from 'react'

export default function Inputs({changer, text, variant, title, type, width}) {
  return (
    <TextField
        style={{"margin": "0.5rem 0", "maxWidth": "95%"}}
        id="outlined-basic"
        label={title||"Outlined"}
        fullWidth={width}
        type={type|| "text"}
        variant={variant||"outlined"}
        onChange={(e)=>{changer(e.target.value)}}/>

  )
}
