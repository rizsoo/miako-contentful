import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Announcements = ({ props, options, lang }) => {
    
    return (
        <Box>
        {props.elements.map((el, i) => {
        const output = el && renderRichText(el.content, options)
            return (
                <Link to={lang.node_locale === "hu" ? `/${el.link.slug}` : `/${lang.node_locale}/${el.link.slug}`}>
                <Content>
                    {el.image && <img src={el.image.url} alt='' />}
                    <span>
                        <h2>{el.title}</h2>
                        <Text>{output}</Text>
                    </span>
                </Content>
                </Link>

            )
        })}
        </Box>
    )
}

export const Box = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media (max-width: 650px) {
    }
`

export const Content = styled.div`
    margin: -110px -150px 130px -150px;
    padding: 0 40px 20px 40px;

    color: white;
    overflow: hidden;
    cursor: pointer;
    height: auto;
    width: max-content;

    h2 {
        font-size: 35px;
        margin: 0;
        margin-bottom: 10px;
        @media (max-width: 650px) {
            font-size: 35px;
            margin-bottom: 15px;
        }
    }
    span {
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
        margin: -20px 0 20px 0;
        padding: 0;
        width: 100%;
        h2 {
            font-size: 30px;
        }
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