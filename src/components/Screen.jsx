import { useState } from "react"
import "./screen.css"

function Screen({click, operator, theme}) {
  const screen = click

  const themes = {
    color: theme==1? "var(--t1-text-white)" : theme==2? "var(--t2-text-blue)" : "var(--t3-text-yellow)",
    backgroundColor: theme==1? "var(--t1-bg-screen)" : theme==2? "var(--t2-bg-screen)" : "var(--t3-bg-screen)"
  }

  return (
    <div className="screen" style={themes}>
      <p className="operator">{operator}</p>
        <p className="screen-values">{screen}</p>
    </div>
  )
}

export default Screen