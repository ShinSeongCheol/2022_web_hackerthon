import React from "react";
import Footer from "./Footer";
import Header from './Header';
import Main from './Main';
import { useState } from 'react';


function Talk() {
  const [message, setMessage] = useState([{msg:"hi!ヾ(^▽^*)))", from:false}])

  const getMessage = (msg, from) =>{
    setMessage((current) => [...current,({msg:msg, from:from})])
  }
  return (
   
    <div className="App">
      <Header/>
        <Main message = {message}/>
      <Footer setMessage = {getMessage}/>
    </div>    
  );
}

export default Talk;
