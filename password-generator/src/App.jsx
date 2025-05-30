import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let [password, setPass] = useState("");
  let [number, setNum] = useState(false);
  let [character, setChar] = useState(false);
  let [length, setLength] = useState(8);
  let passRef = useRef(null);

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = "!@#$%^&*()_+-={}[]:;'<>,.?~";
    let all = str;
    if (number) all += num;
    if (character) all += char;
    for (let i = 0; i < length; i++) {
      pass += all.charAt(Math.floor(Math.random() * all.length));
    }
    setPass(pass);
  }, [number, character, length]);

  let copyText = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    // passRef.current?.setSelectionRange(1,4);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, character, number]);

  return (
    <>
      <div class="container">
        <h1>Password Generator</h1>
        <div class="inpBox">
          <input type="text" value={password} readOnly ref={passRef} />
          <button class="copyBtn" onClick={copyText}>
            Copy
          </button>
        </div>
        <div class="feacture">
          <div class="range">
            <label>Length: {length}</label>
            <input
              onChange={(e) => {
                setLength(e.target.value);
              }}
              type="range"
              min="8"
              value={length}
              max="16"
            />
          </div>
          <div class="checkbox">
            <input
              onChange={() => {
                setNum((pre) => !pre);
              }}
              type="checkbox"
              id="number"
            />
            <label for="number">Number</label>
          </div>
          <div className="char">
            <input
              onChange={() => {
                setChar((pre) => !pre);
              }}
              type="checkbox"
              id="char"
            />
            <label for="char">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
