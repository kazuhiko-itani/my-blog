import React from "react"
import styles from "./styles"
import styled from "styled-components"

import { Header } from "../Header"
import { Footer } from "../Footer"
import { GlobalStyle } from "../GlobalStyle"
import { SocialButtons } from "../SocialButtons"

const { Main } = styles

type Props = {
  url: string
  title: string
  children: React.ReactNode
}

export const PostLayout: React.FC<Props> = props => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{props.children}</Main>
      <StyledSocialButtons url={props.url} size={40} title={props.title} />
      <Footer />
    </>
  )
}

const StyledSocialButtons = styled(SocialButtons)`
  margin-bottom: 40px;
`
