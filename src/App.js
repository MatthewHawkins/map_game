/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import { css } from '@emotion/react'

import Map from "./components/Map";
import CountryDisplay from "./components/CountryDisplay";

function App() {

  const bodyStyles = css`
    overflow: hidden;
  `;

  const [countries, setCountries] = useState([]);
  const [choice, setChoice] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log(choice)
    console.log(counter)
    if(countries[counter] == choice){
      setCounter(counter+1)
    }
}, [choice])

  return (
    <div css={bodyStyles}>
      <CountryDisplay countries={countries} counter={counter}/>
      <Map setCountries={setCountries} setChoice={setChoice} />
    </div>
  );
}

export default App;
