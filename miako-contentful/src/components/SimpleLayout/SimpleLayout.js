import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from 'styled-components';

export const SimpleLayout = ({ props, options }) => {

    const output = props && renderRichText(props.content, options)
    return (
        <Content>
            <img src={props.image.url} alt='' />
            <Text>{output}</Text>
        </Content>
    )
}

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    margin: -70px -40px;
    img {
        height: 100%;
        object-fit: cover;
    }
    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`
export const Text = styled.div`
    padding: 50px;
    color: black;
    h2 {
        margin: 0 0 20px 0;
    }
    @media (max-width: 650px) {
        padding: 40px 20px;
    }
`