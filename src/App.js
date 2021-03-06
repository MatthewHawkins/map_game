/** @jsxImportSource @emotion/react */

import { useState, useEffect } from "react";
import { css } from '@emotion/react'

import Map from "./components/Map";
import CountryDisplay from "./components/CountryDisplay";
import ding from "./data/137523215.mp3"
// import ding from './data/Y2Mate.is - Sports Utility Vehicle-bDPo3EhUWi4-240p-1646116678114.mp4'
//Thx Kev -_-

const correctSound = new Audio(ding)

const NUM_COUNTRIES = 176

function App() {

  const bodyStyles = css`
    overflow: hidden;
  `;

  const [countries, setCountries] = useState([]);
  const [choice, setChoice] = useState("");
  const [counter, setCounter] = useState(0);
  const [countriesObject, setCountriesObject] = useState({})
  const [playSound, setPlaySound] = useState(false)

  useEffect(()=>{
    // console.log(choice)
    // console.log(countries)
    // console.log(counter)
    if(countries[counter] == choice){
      countriesObject[choice].fillColor = "green"
      if (playSound) {
        correctSound.play()
      }
      setCounter(counter+1)
    }
    // 176 from the number of countries given to us
    if(counter === NUM_COUNTRIES) {
      alert("You win!")
    }
}, [choice])

  return (
    <div css={bodyStyles}>
      <CountryDisplay countries={countries} counter={counter} setPlaySound={setPlaySound}/>
      <Map setCountries={setCountries} setChoice={setChoice} countries={countries} setCountriesObject={setCountriesObject} countriesObject={countriesObject}/>
    </div>
  );
}

export default App;
