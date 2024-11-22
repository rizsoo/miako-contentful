import React from 'react'
import './zero.css'
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { SEO } from '../components/Seo';
import { PageContentLayout } from '../components/page-content-layout';

const PageTemplate = ({ data: { page, navbar, footer } }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [page])

  return (
    <html>
      <Helmet>
        <title>{page.title}</title>
        <SEO title={page.title} description={"Mi a Kő Étterem"} />
      </Helmet>
      {isLoaded ?
        <PageContentLayout
          title={page.title}
          content={page.content}
          image={page.image}
          navbar={navbar}
          footer={footer}
          details={page}
        />
        :
        <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <ThreeDots
            height="90"
            width="90"
            radius="9"
            color="#000000"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>}
    </html>
  )
}

export const query = graphql`
query MyQuery($slug: String, $node_locale: String) {
  page: contentfulPage(slug: { eq: $slug }, node_locale: { eq: $node_locale }) {
        content {
          raw
          references {
            ... on ContentfulAsset {
              __typename
              contentful_id
              file {
                url
              }
            }
            ... on ContentfulSimpleLayout {
              __typename
              contentful_id
              image {
                url
              }
              content {
                raw
              }
            }
            ... on ContentfulShortLayout {
              __typename
              contentful_id
              title
              link {
                slug
              }
              image {
                url
              }
              content {
                raw
              }
            }
            ... on ContentfulGalleryLayout {
              __typename
              contentful_id
              images {
                url
              }
            }
            ... on ContentfulMenuList {
              __typename
              contentful_id
              title
              elements {
                title
                description {
                  description
                }
                price
                icon {
                  url
                }
                offer
              }
            }
            ... on ContentfulRoomList {
              __typename
              contentful_id
              title
              subtext
              footer {
                footer
              }
              elements {
                title
                description {
                  description
                }
                price
                icon {
                  url
                }
              }
            }
         }  
        }
        contentful_id
        slug
        slogan
        description {
            description
        }
        node_locale
        title
        image {
            url
        }
    }
    navbar: contentfulPagelist(node_locale: {eq: $node_locale}, title: {eq: "Navbar"}) {
        title
        node_locale
        contentful_id
        elements {
          title
          description {
            description
          }
          slug
          node_locale
          }
      }
      footer: contentfulPagelist(node_locale: {eq: $node_locale}, title: {eq: "Footer"}) {
        title
        node_locale
        contentful_id
        elements {
          title
          description {
            description
          }
          slug
          node_locale
          }
      }
}
`

export default PageTemplate

