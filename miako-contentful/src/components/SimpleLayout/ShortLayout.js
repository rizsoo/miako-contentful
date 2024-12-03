import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const ShortLayout = ({ props, options, lang }) => {

    const output = props && renderRichText(props.content, options)

    return (
        <Link to={lang.node_locale === "hu" ? `/${props.link.slug}` : `/${lang.node_locale}/${props.link.slug}`}>
        <Content>
            <img src={props.image.url} alt='' />
            <span>
                <h2>{props.title}</h2>
                <Text>{output}</Text>
                <button>{lang.node_locale === "hu" ? "Részletek" : "Read more"}</button>
            </span>
        </Content>
        </Link>
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
    cursor: pointer;
    h2 {
        font-size: 90px;
        margin: 0;
        line-height: 100px;
        margin: 35px 0 20px 0;
        @media (max-width: 650px) {
            font-size: 35px;
            margin: 0 0 15px 0;
        }
    }
    span {
        height: 700px;
        padding: 0 0 0 80px;
        a {
            color: white;
        }
        @media (max-width: 650px) {
            padding: 20px 20px 40px 20px;
            height: auto;
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
        @media (max-width: 650px) {
            display: none;
        }
    }
    img {
        object-fit: cover;
        object-position: center;
        min-height: 100%;
        @media (max-width: 650px) {
            max-height: 400px;
        }
    }
    @media (max-width: 650px) {
        grid-template-columns: 1fr;
        margin: -20px;
        display: flex;
        flex-direction: column;
        height: unset;
        border-top: 20px white solid;
    }
`
export const Text = styled.div`
    color: white;
    h2 {
        margin: 0 0 20px 0;
    }
    p {
        @media (max-width: 650px) {
            font-size: 12px;
        }
    }
`