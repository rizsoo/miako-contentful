import React from 'react'
import styled from 'styled-components'

export const Gallery = ({ props }) => {

    return (
        <Template>
            {props.images.map((el, i) => {
                return (
                    <img key={i} src={el.url} alt='' />
                )
            })}
        </Template>
    )
}

export const Template = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding-bottom: 30px;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(2, 1fr);
    img {
        height: auto;
        width: 100%;
        aspect-ratio: 1.1/1;
        object-fit: cover;
    }
    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }
`