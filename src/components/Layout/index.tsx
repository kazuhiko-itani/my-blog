import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./styles"
import styled from "styled-components"

import Header from "../Header"
import Footer from "../Footer"
import SideBar from "../SideBar"
import { GlobalStyle } from "../GlobalStyle"
import Breakpoint from "../GlobalStyle/breakpoint"
import { MainVisualImageQuery } from "../../../types/graphql-types"

const { MainVisual, MainLayout, Main } = styles

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
      <MainLayout>
        <Main>{props.children}</Main>
        <StyledAside>
          <SideBar />
        </StyledAside>
      </MainLayout>
      <Footer />
    </>
  )
}

export default Layout

const StyledAside = styled.aside`
  width: 20%;

  @media (max-width: ${Breakpoint.sp}) {
    width: 95%;
    margin: 0 auto;
  }
`
