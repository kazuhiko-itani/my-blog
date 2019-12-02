import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./styles"

import Header from "../Header"
import Footer from "../Footer"
import { GlobalStyle } from "../GlobalStyle"
import { MainVisualImageQuery } from "../../../types/graphql-types"

const { MainVisual, Main } = styles

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = props => {
  const data: MainVisualImageQuery = useStaticQuery(graphql`
    query MainVisualImage {
      MainVisualImage: file(relativePath: { eq: "MainVisual.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // use Any Type @see https://github.com/gatsbyjs/gatsby/issues/17003
  const image: any = data.MainVisualImage.childImageSharp.fluid

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainVisual fluid={image} />
      <Main>{props.children}</Main>
      <Footer />
    </>
  )
}

export default Layout
