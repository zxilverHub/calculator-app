import { useEffect, useState } from "react"
import "./nav.css"

function Nav({ themeSetter }) {
  const [theme, setTheme] = useState(1);

  const pos = {
    left: theme==1? "4px" : theme==2? "calc(50% - 8px)" : "calc(100% - 19px)",
    backgroundColor: theme==3? "var(--t3-key-red-bg)" : "var(--t1-key-red-bg)"
  }

  const navStyle = {
    color: theme==1? "var(--t1-text-white)" : theme==2? "var(--t2-text-blue)" : "var(--t3-text-yellow)"
  }

  useEffect(() => {
    themeSetter(theme)
  }, [theme])

  const handleTheme = () => {
    setTheme(prevState => prevState<3? prevState+1 : 1)
  }

  return (
    <div className="nav" style={navStyle}>
        <h1 className="logo">calc</h1>

        <div className="theme-toggle" onClick={handleTheme}>
            <p className="theme-title">THEME</p>

            <div className="toggle">
                <div className="toggle-btn" style={pos}></div>

                <div className="theme-label">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav