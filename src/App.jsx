import React, { useEffect, useState } from 'react'
import "./App.css"

import Nav from './components/Nav'
import Screen from './components/Screen'
import Keypad from './components/Keypad'

function App() {
  const [click, setClick] = useState("");

  const [fOperand, setFOperand] = useState(null)
  const [operator, setOperator] = useState("")

  const handleKey = (clicked) => {
    if(clicked === "DEL") {
      let values = click.slice(0, click.length-1)
      setClick(values)

    } else if(clicked =="-" || clicked =="+" || clicked =="/" || clicked =="-" || clicked =="*") {
      setFOperand(Number(click))
      setOperator(clicked)
      setClick("")

    } else if(clicked == "=") {
      switch(operator) {
        case "+":
          setClick( String(fOperand + Number(click)) )
          break;
        case "-":
          setClick( String(fOperand - Number(click)) )
          break;
        case "*":
          setClick( String(fOperand * Number(click)) )
          break;
        case "/":
          setClick( String(fOperand / Number(click)) )
          break;
        default:
          setClick("")
      }

      setOperator("")

    } else if(clicked == "RESET") {
      setClick("")
      setOperator("")
      setFOperand(null)

    } else {
      setClick(prevState => prevState +=String(clicked))
    }
  }

  const [themeNo, setThemeno] = useState(1);
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = `${themeNo==1? "var(--t1-bg-main)" : themeNo==2? "var(--t2-bg-main)" : "var(--t3-bg-main)"}`
  }, [themeNo])

  const themeSetter = (th) => {
    setThemeno(th)
  }


  return (
    <div className='app-container'>
      <Nav themeSetter={themeSetter} />
      <Screen click={click} operator={operator} theme={themeNo}/>
      <Keypad handleKey={handleKey} theme={themeNo} />
    </div>
  )
}

export default App