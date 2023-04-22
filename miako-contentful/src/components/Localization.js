import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import en from '../assets/img/en.png'
import hu from '../assets/img/hu.png'
import { Link } from 'gatsby';

export const Localization = ({ data }) => {

    const [isOpen, setIsOpen] = useState(true);

    const languages = [
        {
            code: en,
            name: 'English',
            country_code: 'en'
        },
        {
            code: hu,
            name: 'Magyar',
            country_code: 'hu'
        }
    ]

    return (
        <LangaugeSelector>
            <Flag icon={isOpen}>
                {languages.filter(el => el.country_code !== data.node_locale).map(({ code, name, country_code }) => (
                    <Link key={name} to={data.slug === "home" && data.node_locale === "en" ? '/' : data.slug === "home" ? `/${country_code}` : `/${country_code}/${data.slug}`}>
                        <img src={code} alt='' key={code} onClick={() => { setIsOpen(true) }} />
                    </Link>
                ))}
            </Flag>
            <img src={require(`/src/assets/img/${data.node_locale}.png`).default} alt="" onClick={() => { setIsOpen(!isOpen) }} />
        </LangaugeSelector>

    )
}

export const LangaugeSelector = styled.div`
    position: fixed;
    right: 12px;
    bottom: 12px;
    width: 60px;

    color: black;
    display: flex;
    justify-content: end;
    align-items: right;

    z-index: 50;
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin-left: 5px;
        z-index: 1;
        cursor: pointer;
    }
    img:hover {
        transform: scale(1.07);
        z-index: 15;
    }
`
export const Flag = styled.div`
    display: flex;
    align-items: center;
    transform: ${props => props.icon ? "translateX(10px)" : "translateX(0) !important;"};
    opacity: ${props => props.icon ? "0" : "1"};
    visibility: ${props => props.icon ? "hidden" : "visible"};
    transition: all ease-in-out 0.3s;
    img {
        margin-left: -3px;
        width: 50px;
        height: 50px;
        min-width: 50px !important;
        cursor: pointer;
        z-index: 5;
        transition: all ease-in-out 0.1s;
    }
    a {
        display: flex;
    }
    img:hover {
        transform: scale(1.07);
        z-index: 15;
    }
`