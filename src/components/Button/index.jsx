import React from "react";
import Button from '@mui/material/Button';

export default function Buttons({type, text, make, background, width}){
  "contained"
    return(
      <Button
        style={{"margin": "0.5rem 0", "maxWidth": "95%"}}
        fullWidth={width}
        onClick={make}
        color={`${background||"primary"}`}
        variant={type||"contained"}>
          {text}
      </Button>
  )
}
