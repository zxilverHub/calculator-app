import "./keypad.css"

function Keypad({handleKey, theme}) {
  const keys = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "*", "RESET", "="]
  
  const themes = {
    color: theme==1? "var(--t1-text-white)" : theme==2? "var(--t2-text-blue)" : "var(--t3-text-yellow)",
    backgroundColor: theme==1? "var(--t1-bg-keypad)" : theme==2? "var(--t2-bg-keypad)" : "var(--t3-bg-keypad)"
  }

  const keyTheme = {
    backgroundColor: theme==1? "var(--t1-key-orange-bg)" : theme==2? "var(--t2-key-orange-bg)" : "var(--t3-key-orange-bg)",
    boxShadow: theme==1? "0 5px 0 var(--t1-key-orange-sh)" : theme==2?  "0 5px 0 var(--t2-key-orange-sh)" :  "0 5px 0 var(--t3-key-orange-sh)",
    color: theme==1? "var(--t1-text-blue)" : theme==2? "var(--t2-text-blue)" : "var(--t3-text-yellow)"
  }

  return (
    <div className="keypad" style={themes}>
        {keys.map((key, i) => (
          <p className="key" key={i} style={keyTheme}
            onClick={()=>handleKey(key)}
          >{key}</p>
        ))}
    </div>
  )
}

export default Keypad