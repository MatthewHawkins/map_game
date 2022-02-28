/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React, {useEffect} from 'react';

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
  } from "react-simple-maps";

  import MAPDATA from '../data/mapData.json'

  /*https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array*/

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
   

  function Map(props) {

    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    const bodyStyles = css`
        margin-top: -250px;
    `;

    const kevin = MAPDATA.objects.ne_110m_admin_0_countries.geometries

    useEffect(()=>{
        var countries = [];
        kevin.forEach(element => {
            countries.push(element.properties.NAME)
        });
        shuffle(countries)
        props.setCountries(countries)
    }, [])
    
    return (
    <div>
        <ComposableMap css={bodyStyles}>
            <ZoomableGroup 
                zoom={.70}
                minZoom={.70}
            >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map(geo => (
                    <Geography key={geo.rsmKey} geography={geo} 
                        onClick={() => {
                            props.setChoice(geo.properties.NAME)
                            console.log(geo.properties.NAME)
                        }}
                        fill={"#9e9e9e"}
                        stroke={"#000000"}
                        strokeWidth={".2"}

                    />
                ))
                }
            </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    </div>
    );
}

export default Map;