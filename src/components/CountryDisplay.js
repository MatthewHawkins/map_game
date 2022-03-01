/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function CountryDisplay(props) {

    // Initialize true the first time
    useEffect(() => {
        props.setPlaySound(true)
    }, [])

    const [volume, setVolume] = useState(true)

    function soundOn() {
        setVolume(!volume)
        props.setPlaySound(true)
    }
    
    function soundOff() {
        setVolume(!volume)
        props.setPlaySound(false)
    }

    const bodyStyles = css`
        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;
    `;
    const displayStyles = css`
        font-size: 1.5em;
    `;

    const wrapperStyles = css`
        margin-top: 10px;
        width: 10vw;
        border-radius: 35px;
        background-color: #afe0dd;
        display: flex;
        justify-content: center;
        position: absolute;
    `
    const counterWrapperStyles = css`
        display: flex;
        justify-content: end;
        align-items: center;
        position: absolute;
        right: 10px;
        background-color: #afe0dd;
        border-radius: 35px;
        padding: 0px 10px;
        margin-top: 10px;
    `

    return (
        <div css={bodyStyles}>
            <div css={wrapperStyles}>
                <p css={displayStyles}>{props.countries[props.counter]}</p>
            </div>
            <div css={counterWrapperStyles}>
                <p css={displayStyles}> {`${props.counter} / 177`} </p>
                { volume ? 
                    <VolumeUpIcon onClick={() => soundOff()} />
                    : 
                    <VolumeOffIcon onClick={() => soundOn()}/>
                }
            </div>
        </div>
    );
}

export default CountryDisplay;