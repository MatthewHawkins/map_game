/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'

function CountryDisplay(props) {

    const bodyStyles = css`
        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;
    `;
    const displayStyles = css`
        /* position: absolute; */
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
        /* flex: 1; */
    `
    const counterWrapperStyles = css`
        display: flex;
        justify-content: end;
        align-items: center;
        /* width: 100%; */
        position: absolute;
        right: 10px;
        background-color: #afe0dd;
        border-radius: 35px;
        padding: 0px 10px;
        margin-top: 10px;
        /* flex: 1; */
    `

    return (
        <div css={bodyStyles}>
            <div css={wrapperStyles}>
                <p css={displayStyles}>{props.countries[props.counter]}</p>
            </div>
            <div css={counterWrapperStyles}>
                <p css={displayStyles}> {`${props.counter} / 177`} </p>
            </div>

        </div>
    );
}

export default CountryDisplay;