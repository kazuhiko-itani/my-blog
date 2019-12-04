import React from "react"
import styles from "./styles"

import Header from "../Header"
import Footer from "../Footer"
import { GlobalStyle } from "../GlobalStyle"

const { Main } = styles

type Props = {
  children: React.ReactNode
}

export const PostLayout: React.FC<Props> = props => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  )
}
