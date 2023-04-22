import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const ShortLayout = ({ props, options, lang }) => {

    const output = props && renderRichText(props.content, options)

    return (
        <Content>
            <img src={props.image.url} alt='' />
            <span>
                <h2>{props.title}</h2>
                <Text>{output}</Text>
                <Link to={lang.node_locale === "hu" ? `/${props.link.slug}` : `/${lang.node_locale}/${props.link.slug}`}><button>{lang.node_locale === "hu" ? "Részletek" : "Read more"}</button></Link>
            </span>
        </Content>
    )
}

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #1f1f1f;
    color: white;
    margin: -70px -150px;
    overflow: hidden;
    height: 700px;
    h2 {
        font-size: 90px;
        margin: 0;
    }
    span {
        height: 700px;
        padding: 0 0 0 80px;
        a {
            color: white;
        }
    }
    button {
        padding: 10px 15px;
        background-color: transparent;
        border-radius: 25px;
        border: 2.5px solid white;
        margin-top: 10px;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
    }
    img {
        object-fit: cover;
        object-position: center;
        min-height: 100%;
    }
    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`
export const Text = styled.div`
    color: white;
    h2 {
        margin: 0 0 20px 0;
    }
    @media (max-width: 650px) {
        padding: 40px 20px;
    }
`