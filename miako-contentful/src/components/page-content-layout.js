import React from 'react'
import styled from 'styled-components'
//import { useState } from 'react'

import { Navbar } from './Navbar'
import { Localization } from './Localization'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Footer } from './Footer'
import { SimpleLayout } from './SimpleLayout/SimpleLayout'
import { Gallery } from './Gallery/Gallery'
import { MenuList } from './Menulist/MenuList'
import { ShortLayout } from './SimpleLayout/ShortLayout'
import RoomList from './Rooms/RoomList'

export const PageContentLayout = ({ title, content, navbar, footer, details }) => {
    
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                let link = node.data.target.description;
                if (link) {
                    return <a href={link} target={link.includes("http") && "_blank"} rel="noreferrer"><img src={node.data.target.file.url} alt="" /></a>
                } else return <img src={node.data.target.file.url} alt="" />
            },
            [INLINES.HYPERLINK]: (node) => {
                let link = node.data.uri
                return <a href={link} target={link.includes("http") && "_blank"} rel="noreferrer">{node.content[0].value}</a>
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                let data = node.data.target
                switch (data && data.__typename) {
                    case "ContentfulSimpleLayout":
                        return (
                            <SimpleLayout
                                props={data}
                                options={options}
                                lang={details}
                            />
                        )
                    case "ContentfulShortLayout":
                        return (
                            <ShortLayout
                                props={data}
                                options={options}
                                lang={details}
                            />
                        )
                    case "ContentfulGalleryLayout":
                        return (
                            <Gallery
                                props={data}
                                lang={details}
                            />
                        )
                    case "ContentfulMenuList":
                        return (
                            <MenuList
                                props={data}
                                lang={details}
                            />
                        )
                    case "ContentfulRoomList":
                        return (
                            <RoomList
                                props={data}
                                lang={details}
                            />
                        )
                    default:
                        return null
                }
            }
        }
    }

    const output = content && renderRichText(content, options)

    
    return (
        <div>
            <Navbar navbar={navbar} slogan={details.slogan && details.slogan} cover={details.image && details.image.url} lang={details} />
            <div style={{ minHeight: "calc(100vh - 317px)" }}>
                <PageTitle isHome={details.slug}>{details.slug !== "home" && title}</PageTitle>
                <PageContent>
                    <Content role='main'>
                        {output}
                    </Content>
                </PageContent>
            </div>
            <Footer footer={footer} lang={details} />
            <Localization data={details} />
        </div>
    )
}

export const PageTitle = styled.h2`
    max-width: 1300px;
    margin: 40px auto;
    padding: ${props => props.isHome === "home" ? "10px" : "20px"};
    font-size: 50px;
    text-align: center;
    color: #F5F5F5;
    @media (max-width: 800px) {
        font-size: 35px;
        text-align: left;
        margin: 0px auto;
        ${props => props.isHome === "home" ? "display: none;" : null};

    }
`
export const CoverImg = styled.img`
    max-height: 300px;
    object-fit: cover;
    width: 100%;
    margin-bottom: 10px;
`
export const Content = styled.main`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    background-color: white;
    color: black;
    padding: 50px 150px;
    a {
        color: #279BDE;
    }
    @media (max-width: 650px) {
        flex-direction: column;
        padding: 20px 20px 0 20px;
    }
`
export const PageContent = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: #F5F5F5;
    @media (max-width: 650px) {
        flex-direction: column;
        padding: 0;
    }
`

export const Paragraph = styled.p`
    margin-bottom: 12px;
    b {
        font-weight: 600;
    }
`


