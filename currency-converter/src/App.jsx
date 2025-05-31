import { useState } from "react";
import "./App.css";
import fetchingData from "./custom-hooks/fetch-hook";
import InputForm from "./components/input-component";

function App() {
  let [fromLabel, setFromlabel] = useState("From");
  let [toLabel, setTolabel] = useState("To");
  let [fromValue, setFromValue] = useState(0);
  let [toValue, setToValue] = useState(0);
  let [formType, setFromType] = useState("aed");
  let [toType, settoType] = useState("aed");
  let Options = ["AED", "AFN", "XCD", "AMD", "ANG", "AOA", "AQD", "ARS", "AUD",
    "AZN", "BAM", "BBD", "BDT", "XOF", "BGN", "BHD", "BIF", "BMD", "BND",
    "BOB", "BRL", "BSD", "NOK", "BWP", "BYR", "BZD", "CAD", "CDF", "XAF",
    "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CYP", "CZK", "DJF",
    "DKK", "DOP", "DZD", "ECS", "EEK", "EGP", "ETB", "EUR", "FJD", "FKP",
    "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD",
  "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK",
  "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD",
  "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD",
  "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MTL", "MUR",
  "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "XPF", "NGN", "NIO", "NPR",
  "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR",
  "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD",
  "SKK", "SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS",
  "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD",
  "UYU", "UZS", "VEF", "VND", "VUV", "YER", "ZAR", "ZMK", "ZWD"]
  
  const [fromOptions, setFromOptions] = useState(Options)
  const [toOptions, setToOptions] = useState(Options)

  async function fetch() {
    let data = await fetchingData(formType);
    let result = fromValue * data[formType][toType]
    setToValue(result)
  }

  function curencyConvert() {
    fetch()
  }
  let objFrom = {
    type: formType,
    label: fromLabel,
    value: fromValue,
    options: fromOptions,
    setOptions: setFromOptions,
    setLabel: setFromlabel,
    setValue: setFromValue,
    setType: setFromType,    
    read: true
  };
  let objTo = {
    type: toType,
    label: toLabel,
    value: toValue,
    options: toOptions,
    setOptions: setToOptions,
    setLabel: setTolabel,
    setValue: setToValue,
    setType: settoType,    
    read: false,
  };

  return (
    <>
      <div class="main">
        <div class="container">
          <InputForm obj={objFrom} />
          <InputForm obj={objTo} />
          <div class="convert"></div>
        <div className="btnCont">
          <button onClick={()=>{curencyConvert()}}>Convert</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
