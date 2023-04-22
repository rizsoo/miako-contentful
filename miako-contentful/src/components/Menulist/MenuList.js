import React from 'react'
import styled from 'styled-components';

export const MenuList = ({ props }) => {
    console.log(props.elements.description);
    return (
        <>
            <Title>{props.title}</Title>
            <Line />
            {props.elements.map((el, i) => {
                return (
                    <Box>
                        <span>
                            <b>{el.title}</b>
                            <Allergers>{el.description && el.description.description}</Allergers>
                        </span>
                        <Price>{el.price}</Price>
                    </Box>
                )
            })}
        </>
    )
}

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.h2`
    font-weight: 200;
`

export const Allergers = styled.p`
    font-size: 13px;
    font-weight: 200;
    color: grey;
    margin-top: 10px;
`

export const Line = styled.hr`
    border-top: 1.1px solid grey;
    border-bottom: unset;
`

export const Price = styled.p`
    font-weight: 300;
`