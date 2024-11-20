import React from 'react'
import styled from 'styled-components';

export const MenuList = ({ props, lang }) => {

    return (
        <>
            <Title>{props.title}</Title>
            <Line />
            {props.elements.map((el, i) => {
                return (
                    <Box>
                        <span>
                            <p><b>{el.title}</b> {el.offer && <Offer>{lang.node_locale === "hu" ? "Heti ajánlat" : "Weekly offer"}</Offer>}</p>
                            <Price>{el.price}</Price>
                        </span>
                        <Allergers>{el.description && el.description.description}</Allergers>
                    </Box>
                )
            })}
        </>
    )
}

export const Box = styled.div`
    margin-bottom: 35px;
    span {
        display: flex;
        justify-content: space-between;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
`

export const Title = styled.h2`
    font-weight: 200;
`

export const Allergers = styled.p`
    font-size: 13px;
    font-weight: 200;
    color: grey;
`

export const Line = styled.hr`
    border-top: 1.1px solid grey;
    border-bottom: unset;
`

export const Price = styled.p`
    font-weight: 300;
    white-space: nowrap;
`
export const Offer = styled.i`
    font-size: 14px;
    padding: 2px 6px 2px 4px;
    border: 1px solid green;
    background-color: lightgreen;
    border-radius: 4px;
    white-space: nowrap;
    margin: 0 0 0 10px;
    @media (max-width: 768px) {
        margin: 0;
    }
`