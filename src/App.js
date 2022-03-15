import "./App.css";
import { useState } from "react";

const buttonList = [
  { id: 101, color: "#d4afb9" },
  { id: 102, color: "#7ec4cf" },
  { id: 103, color: "#d4d587" }
];
function App() {
  const [buttonStyle, setButtonStyle] = useState("");
  const handleClick = (e) => {
    setButtonStyle(e.target.style.backgroundColor);
  };
  return (
    <div className="App"  style={{ backgroundColor: buttonStyle}}>
      <div className="button-list">
      {buttonList.map(({id, color}) => (
        <div
          key={id}
          className="button-item"
          style={{ backgroundColor: color }}
          onClick={(e) => {
            handleClick(e);
          }}
        ></div>
      ))}
      </div>
    </div>
  );
}

export default App;
