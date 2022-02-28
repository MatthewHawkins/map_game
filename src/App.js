/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import { css } from '@emotion/react'

import Map from "./components/Map";
import CountryDisplay from "./components/CountryDisplay";
import song from "./data/137523215.mp3"

const audio = new Audio(song)

const NUM_COUNTRIES = 176

function App() {

  const bodyStyles = css`
    overflow: hidden;
  `;

  const [countries, setCountries] = useState([]);
  const [choice, setChoice] = useState("");
  const [counter, setCounter] = useState(0);
  const [countriesObject, setCountriesObject] = useState({})

  useEffect(()=>{
    // console.log(choice)
    // console.log(countries)
    // console.log(counter)
    if(countries[counter] == choice){
      countriesObject[choice] = "green"
      audio.play()
      setCounter(counter+1)
    }
    // 176 from the number of countries given to us
    if(counter === NUM_COUNTRIES) {
      alert("You win!")
    }
}, [choice])

  return (
    <div css={bodyStyles}>
      <CountryDisplay countries={countries} counter={counter}/>
      <Map setCountries={setCountries} setChoice={setChoice} countries={countries} setCountriesObject={setCountriesObject} countriesObject={countriesObject}/>
    </div>
  );
}

export default App;
