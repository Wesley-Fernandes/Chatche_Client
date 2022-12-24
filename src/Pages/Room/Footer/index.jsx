import React, { useState } from "react";
import './index.sass'
import Buttons from "../../../components/Button";
export default function Footer({send}) {
  const [inputValue, setInput] = useState("");

  function Send(e) {
    send(inputValue)
  }

  return (
    <footer>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
        <Buttons make={Send} text="Enviar" width={false}/>
      </form>
    </footer>
  );
}
