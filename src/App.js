import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textfor from './components/Textfor';
import About from './components/About';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//let name="chirag";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      showalert(null)
    },1500)
  }
  const togglMode=()=>{
    if(mode==='dark')
    {
      setmode('light')
      document.body.style.background='white'
      showalert("Light mode has been enabled","Succes")
    }
    else
    {
      setmode('dark')
      document.body.style.background='#042743'
      showalert("Dark mode has been enabled","Succes")
    }
  }
  return (
   <>
    <Router>
   <Navbar title="CodeCoder" home="" about="about us"  mode={mode}  togglMode={togglMode} />
   <Alerts alert={alert}/>
  <div className="container my-3">
  
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Textfor showalert={showalert}  heading="Enter the text for Analysis" mode={mode}  />
          <Route exact path="/">
          
          </Route>
        </Switch>
   
   </div>
   </Router>
   { /*<About/>*/}
  
     </>
  );
}

export default App;
