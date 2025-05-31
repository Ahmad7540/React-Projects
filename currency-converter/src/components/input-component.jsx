import { useState } from "react";

function InputForm({ obj }) {
  const [formType, setFromType] = useState("pkr");
  const [toType, settoType] = useState("usd");
  let label = obj.label;
  let options = obj.options.map((opt) => (
    <option key={opt} value={opt.toLowerCase()}>
      {opt}
    </option>
  ));
  return (
    <>
      <div class="inputCont">
        <div class="top">
          <div class="topLeft">{label}</div>
          <div class="topRight">Currency Type</div>
        </div>
        <div class="bottom">
          <div class="bLeft">
            <input
              type="text"
              readOnly={obj.read ? false : true}
              value={obj.value}
              onChange={(e) => {
                obj.setValue(e.target.value);
              }}
            />
          </div>
          <div class="bRight">
            <select
              id=""
              onChange={(e) => {
                obj.setType(e.target.value);
              }}
            >
              {options}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputForm;
