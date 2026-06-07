import React from "react";
import styled from "styled-components";
//import { useState } from 'react'

import { Navbar } from "./Navbar";
import { Localization } from "./Localization";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Footer } from "./Footer";
import { SimpleLayout } from "./SimpleLayout/SimpleLayout";
import { Gallery } from "./Gallery/Gallery";
import { MenuList } from "./Menulist/MenuList";
import { ShortLayout } from "./SimpleLayout/ShortLayout";
import RoomList from "./Rooms/RoomList";
import { Announcements } from "./Announcements/Announcements";

export const PageContentLayout = ({
  title,
  content,
  navbar,
  footer,
  details,
}) => {
  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return <InlineCode>{text}</InlineCode>;
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        // Ellenőrizzük, hogy van-e iframe a bekezdésben
        const text = node.content[0]?.value || "";
        if (
          text.trim().startsWith("<iframe") ||
          text.trim().startsWith("<embed")
        ) {
          return <EmbeddedHTML dangerouslySetInnerHTML={{ __html: text }} />;
        }
        // Normál bekezdés
        return <Paragraph>{children}</Paragraph>;
      },
      [BLOCKS.CODE]: (node) => {
        const code = node.content[0].value;
        // Ha iframe HTML kódot tartalmaz (pl. Google Maps), rendereljük HTML-ként
        if (
          code.trim().startsWith("<iframe") ||
          code.trim().startsWith("<embed")
        ) {
          return <EmbeddedHTML dangerouslySetInnerHTML={{ __html: code }} />;
        }
        // Különben normál code blokkként jelenítjük meg
        return <CodeBlock>{code}</CodeBlock>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        let link = node.data.target.description;
        if (link) {
          return (
            <a
              href={link}
              target={link.includes("http") && "_blank"}
              rel="noreferrer"
            >
              <img src={node.data.target.file.url} alt="" />
            </a>
          );
        } else return <img src={node.data.target.file.url} alt="" />;
      },
      [INLINES.HYPERLINK]: (node) => {
        let link = node.data.uri;
        return (
          <a
            href={link}
            target={link.includes("http") && "_blank"}
            rel="noreferrer"
          >
            {node.content[0].value}
          </a>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        let data = node.data.target;
        switch (data && data.__typename) {
          case "ContentfulSimpleLayout":
            return (
              <SimpleLayout props={data} options={options} lang={details} />
            );
          case "ContentfulShortLayout":
            return (
              <ShortLayout props={data} options={options} lang={details} />
            );
          case "ContentfulAnnouncements":
            return (
              <Announcements props={data} options={options} lang={details} />
            );
          case "ContentfulGalleryLayout":
            return <Gallery props={data} lang={details} />;
          case "ContentfulMenuList":
            return <MenuList props={data} lang={details} />;
          case "ContentfulRoomList":
            return <RoomList props={data} lang={details} />;
          default:
            return null;
        }
      },
    },
  };

  const output = content && renderRichText(content, options);

  return (
    <div>
      <Navbar
        navbar={navbar}
        slogan={details.slogan && details.slogan}
        cover={details.image && details.image.url}
        lang={details}
      />
      <div style={{ minHeight: "calc(100vh - 317px)" }}>
        <PageTitle isHome={details.slug}>
          {details.slug !== "home" && title}
        </PageTitle>
        <PageContent>
          <Content role="main" isHome={details.slug}>
            {output}
          </Content>
        </PageContent>
      </div>
      <Footer footer={footer} lang={details} />
      <Localization data={details} />
    </div>
  );
};

export const PageTitle = styled.h2`
  max-width: 1300px;
  margin: 40px auto;
  padding: ${(props) => (props.isHome === "home" ? "10px" : "20px")};
  font-size: 50px;
  text-align: center;
  color: #f5f5f5;
  @media (max-width: 800px) {
    font-size: 35px;
    text-align: left;
    margin: 0px auto;
    ${(props) => (props.isHome === "home" ? "display: none;" : null)};
  }
`;
export const CoverImg = styled.img`
  max-height: 300px;
  object-fit: cover;
  width: 100%;
  margin-bottom: 10px;
`;
export const Content = styled.main`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  background-color: ${(props) =>
    props.isHome === "home" ? "rgb(31, 31, 31)" : " white"};
  color: black;
  padding: 50px 150px;
  a {
    color: #279bde;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
`;
export const PageContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #f5f5f5;
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 12px;
  b {
    font-weight: 600;
  }
`;

export const InlineCode = styled.code`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 2px 6px;
  font-family: "Courier New", monospace;
  font-size: 0.9em;
  color: #c7254e;
`;

export const CodeBlock = styled.pre`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  overflow-x: auto;
  font-family: "Courier New", monospace;
  font-size: 0.9em;
  line-height: 1.5;
  color: #333;
  margin: 15px 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const EmbeddedHTML = styled.div`
  margin: 20px 0;
  text-align: left;

  iframe {
    max-width: 100%;
    border: 0;
    border-radius: 8px;
  }

  @media (max-width: 650px) {
    iframe {
      width: 100%;
      height: 300px;
    }
  }
`;
