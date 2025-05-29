import "./App.css";
import { useState } from "react";

function App() {
  let [color, setColor] = useState("Black");

  return (
    <div style={{ background: color }} class="diiv">
      <footer>
        <div class="footerr">
          <button onClick={() => setColor("red")} class="btn btn1">
            Red
          </button>
          <button onClick={() => setColor("green")} class="btn btn2">
            Green
          </button>
          <button onClick={() => setColor("yellow")} class="btn btn3">
            Yellow
          </button>
          <button onClick={() => setColor("pink")} class="btn btn4">
            Pink
          </button>
          <button onClick={() => setColor("black")} class="btn btn5">
            Black
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
