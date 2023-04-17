import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

import { Navbar } from './Navbar'
import { Localization } from './Localization'
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Footer } from './Footer'

export const PageContentLayout = ({ title, content, navbar, featuredImage, footer, details, contentType, collectiveApplications }) => {

    const [openPopup, setOpenPopup] = useState(false)

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
            // [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            //     let data = node.data.target
            //     switch (data && data.__typename) {
            //         case "ContentfulTrainingsList":
            //             return (
            //                 <TrainingsCards
            //                     props={data.events}
            //                     lang={details}
            //                 />
            //             )
            //         default:
            //             return null
            //     }
            // }
        }
    }

    const output = content && renderRichText(content, options)

    return (
        <div>
            <Navbar navbar={navbar} lang={details} />
            <div style={{ minHeight: "calc(100vh - 317px)" }}>
                <PageTitle isHome={details.slug}>{details.slug !== "home" && title}</PageTitle>
                <PageContent>
                    <Content>
                        {output}
                    </Content>
                </PageContent>
            </div>
            <Footer footer={footer} />
            <Localization data={details} />
        </div>
    )
}

export const PageTitle = styled.h2`
    max-width: 1500px;
    margin: 30px auto;
    padding: ${props => props.isHome === "home" ? "10px" : "20px"};
    font-size: 50px;
    text-align: center;
    color: #F5F5F5;
    @media (max-width: 800px) {
        font-size: 35px;
        text-align: left;
    }
`
export const CoverImg = styled.img`
    max-height: 300px;
    object-fit: cover;
    width: 100%;
    margin-bottom: 10px;
`
export const Content = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
`
export const PageContent = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: #F5F5F5;
    @media (max-width: 650px) {
        flex-direction: column;
    }
`

export const Paragraph = styled.p`
    margin-bottom: 12px;
    b {
        font-weight: 600;
    }
`

export const Gallery = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 20px;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(2, 1fr);
    img {
        height: 100%;
        width: 100%;
        aspect-ratio: 1.5/1;
        object-fit: cover;
    }
    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
