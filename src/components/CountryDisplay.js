/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'

function CountryDisplay(props) {

    const bodyStyles = css`
        display: flex;
        justify-content: center;
    `;
    const displayStyles = css`
        
    `;

    return (
        <div css={bodyStyles}>
            <p css={displayStyles}>{props.countries[props.counter]}</p>
        </div>
    );
}

export default CountryDisplay;