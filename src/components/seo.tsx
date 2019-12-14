/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SiteMetaData } from "../../types/graphql-types"

interface NonPropertyMeta1 {
  name: string
  content: string
  property?: undefined
}

interface NonNameMeta2 {
  name?: undefined
  content: string
  property: string
}

type Meta = NonPropertyMeta1 | NonNameMeta2

type Props = {
  title: string
  url: string | undefined
  description?: string
  lang?: string
  meta?: Meta[]
}

const SEO: React.FC<Props> = props => {
  const data = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      MainVisualImageForMeta: file(relativePath: { eq: "MainVisual.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            src
          }
        }
      }
    }
  `)

  const metaData = props.meta || []

  // undefinedのプロパティがあるとType Errorになるため
  metaData.map(meta => {
    return Object.keys(meta).forEach(key => {
      if (meta[key] == undefined) {
        meta[key] = ""
      }
    })
  })

  const site: SiteMetaData = data.site
  const metaImage: string =
    data.MainVisualImageForMeta.childImageSharp.fluid.src
  const author: string = site.siteMetadata.author
  const metaDescription: string =
    props.description || site.siteMetadata.description
  const lang = props.lang || "ja"

  let metaImagePath = ""
  if (props.url) {
    metaImagePath = `${props.url.split("/")[0]}//${
      props.url.split("/")[2]
    }${metaImage}`
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImagePath,
        },
        {
          property: `og:url`,
          content: props.url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:site`,
          content: `@akashi__akashi`,
        },
      ].concat(metaData)}
    />
  )
}

export default SEO
