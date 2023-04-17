import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

export const Footer = ({ footer }) => {
    return (
        <div style={{ marginTop: "55px" }}>
            <FooterBox>
                <Content>
                    <MenuList>
                        <li className='comment' style={{ color: "grey", fontSize: "13px", fontWeight: "300", marginBottom: "10px" }}>Egyéb oldalak</li>
                        {footer.elements.map((el, i) => {
                            return (
                                <Link key={i} to={`/${el.node_locale}/${el.slug}`} ><MenuElement >{el.title}</MenuElement></Link>
                            )
                        })}
                    </MenuList>
                    <span>
                        <p>Created by Kristóf Fehér</p>
                        <p>COPYRIGHT © Káli-medencei Borok Háza Kft.</p>
                    </span>
                </Content>
            </FooterBox>
            <Socials>
                <a href={'https://www.facebook.com/miako.etterem/'} target='_blank'><BsFacebook /></a>
                <a href={'https://www.instagram.com/mi.a.ko/'} target='_blank'><BsInstagram /></a>
            </Socials>
        </div>
    )
}

export const FooterBox = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 170px;
    padding: 40px 0;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        color: white;
        margin: 0;
    }
    span {
        text-align: right;
        @media (max-width: 650px) {
            text-align: center;
        }
        p {
            color: grey;
            margin: 0;
            font-size: 13px;
        }
    }
`

export const Socials = styled.div`
    background-color: #242424;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 20px;
    padding: 15px;
    color: white;
    @media (max-width: 650px) {
        display: none;
    }
`

export const Content = styled.div`
    width: 1050px;
    max-width: calc(100vw - 60px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 650px) {
        flex-direction: column;
        text-align: center;
        gap: 30px;
    }
`

export const MenuList = styled.ul`
    color: white;
    margin: 0;
    li {
        list-style: none;
        margin: 0;
    }
    .comment {
        @media (max-width: 650px) {
            display: none;
        }
    }
`
export const MenuElement = styled.li`
    cursor: pointer;
`