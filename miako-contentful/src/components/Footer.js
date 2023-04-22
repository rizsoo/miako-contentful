import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

export const Footer = ({ footer, lang }) => {
    return (
        <div style={{ marginTop: "55px" }}>
            <Socials>
                <a href={'https://www.facebook.com/miako.etterem/'} target='_blank'><BsFacebook /></a>
                <a href={'https://www.instagram.com/mi.a.ko/'} target='_blank'><BsInstagram /></a>
            </Socials>
            <FooterBox>
                <Content>
                    <List>
                        <li className='comment' style={{ color: "grey", fontSize: "13px", fontWeight: "300", marginBottom: "10px" }}>Egyéb oldalak</li>
                        {footer.elements.map((el, i) => {
                            return (
                                <Link key={i} to={lang.node_locale === "hu" ? `/${el.slug}` : `/${el.node_locale}/${el.slug}`} ><MenuElement >{el.title}</MenuElement></Link>
                            )
                        })}
                    </List>
                    <span>
                        <p>Created by Kristóf Fehér</p>
                        <p>COPYRIGHT © Káli-medencei Borok Háza Kft.</p>
                    </span>
                </Content>
            </FooterBox>
        </div>
    )
}

export const FooterBox = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 170px;
    padding: 40px 0;
    background-color: #151515;
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
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 30px;
    padding: 15px;
    a {
        color: grey;
        transition: all ease 0.2s;
        &:hover {
            color: lightgrey;
        }
    }
    @media (max-width: 650px) {
        display: none;
    }
`

export const Content = styled.div`
    width: 1400px;
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

export const List = styled.ul`
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