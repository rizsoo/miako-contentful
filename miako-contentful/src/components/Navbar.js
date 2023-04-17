import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { Link } from 'gatsby';
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { BiMenuAltLeft } from 'react-icons/bi'
// import logo from '../assets/eleven_logo_noblack.png'
import bg from '../assets/img/miak.jpg'

export const Navbar = ({ navbar, lang }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavBox bg={bg}>
            <MobileBtn>
                <BiMenuAltLeft onClick={() => setIsOpen(!isOpen)} />
                <Link to={lang.node_locale === "hu" ? "/" : "/en"}>
                    <h1>MI A KŐ</h1>
                    {/* <img src={logo} alt="" /> */}
                </Link>
            </MobileBtn>
            <NavContent isOpen={isOpen}>
                <Link className='logo' to={lang.node_locale === "hu" ? "/" : "/en"}>
                    {/* <img src={logo} alt="" /> */}
                    <h1>MI A KŐ</h1>
                    <p>{lang.node_locale === "hu" ? "Étterem" : "Restaurant"}</p>
                </Link>
                <ul>
                    {navbar.elements.map((el, i) => {
                        return (
                            <Link key={i} to={`/${el.node_locale}/${el.slug}`}><NavElement active={el.title === lang.title}>{el.title}</NavElement></Link>
                        )
                    })}
                    <Socials>
                        <li key={4}><a href={'https://www.facebook.com/elevensportclub'} target='_blank'><BsFacebook /></a></li>
                        <li key={5}><a href={'https://www.instagram.com/eleven.hungary/'} target='_blank'><BsInstagram /></a></li>
                    </Socials>
                </ul>
            </NavContent>
            <Slogan>Ételek, borok, szállás</Slogan>
        </NavBox>
    )
}

export const NavBox = styled.div`
    @media (min-width: 800px) {
        color: white;
    }
    position: relative;
    background: url(${props => props.bg});
    background-size: cover;
    background-position: center;
    height: 100vh;
`
export const NavContent = styled.div`
    margin: 0 auto;
    padding: 35px 50px;
    color: white;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: start;
        gap: 30px;

        position: absolute;
        width: 100%;
        padding: 30px;
        ${props => props.isOpen ? "transform: translateX(0)" : "transform: translateX(-100%)"};
        ${props => props.isOpen ? "opacity: 1" : "opacity: 0.9"};
        transition: all ease 0.5s;

        z-index: 100;
    }
    h1 {
        letter-spacing: 0.2px;
        line-height: 30px;
        margin: 0 !important;
        @media (max-width: 650px) {
            width: 70%;
        }
    }
    display: flex;

    justify-content: space-between;
    align-items: center;
    a {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 9px;
        h1 {
            font-size: 45px;
            margin-top: 7px !important;
        }
        p {
            font-size: 18px;
            color: grey;
            margin: 0;
        }
    }
    img {
        max-height: 57px;
    }
    ul {
        display: flex;
        gap: 40px;
        margin: 0;
        span {
            display: flex;
            gap: 12px;
            margin-left: 3px;
            margin-right: 3px;
            @media (max-width: 650px) {
                margin: 10px 0;
                gap: 20px;
            }
        }
        @media (max-width: 800px) {
            flex-direction: column;
            gap: 13px;
        }
    }
    li {
        list-style-type: none;
        display: flex;
        margin: 0;
        align-items: center;
        ${props => props.active ? "color: white;" : null};
        a {
            display: flex;
            transform: scale(1.3);
            margin-left: 2px;
        }
        @media (max-width: 800px) {
            font-size: 25px;
        }
        transition: all ease 0.15s;
        &:hover {
            color: white;
        }
    }
    @media (max-width: 800px) {
        background-color: black;
        height: 100%;
        .logo {
            display: none;
        }
    }
`

export const NavElement = styled.li`
    list-style-type: none;
    display: flex;
    margin: 0;
    align-items: center;
    ${props => props.active ? "color: white;" : "color: grey;"};
    a {
        display: flex;
        transform: scale(1.3);
        margin-left: 2px;
    }
    @media (max-width: 800px) {
        font-size: 25px;
    }
    transition: all ease 0.15s;
    &:hover {
        color: white;
    }
`

export const MobileBtn = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 25px 20px 20px 20px;
    svg {
        background-color: black;
        color: white;
        transform: scale(2.7);
        padding: 3px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 13px;
    }    
    img {
        height: 44px;
    }
    a {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        gap: 6px;
        h1 {
            font-size: 30px;
            margin: 0 !important;
            line-height: 20px;
            font-weight: 800;
            color: white;
        }
    }
    @media (min-width: 800px) {
        display: none;
    }
`

export const Socials = styled.span`
    margin-top: 20px !important;
    @media (min-width: 800px) {
        display: none !important;
    }
`
export const Slogan = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    height: auto;
    font-size: 100px;
    color: #ffffff4D;
    margin: 0;
    @media (max-width: 800px) {
        font-size: 25px;
    }
`