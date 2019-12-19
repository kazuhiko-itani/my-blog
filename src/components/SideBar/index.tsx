import React from "react"
import styles from "./styles"
import styled from "styled-components"

import { ProfileCard } from "../ProfileCard"
import { NewPosts } from "../NewPosts"

type Props = {
  pathname: string
  className?: string
}

const { Wrapper } = styles

export const SideBar: React.FC<Props> = props => {
  const isAboutPage = (): boolean => {
    return /^\/about/.test(props.pathname)
  }

  return (
    <Wrapper className={props.className}>
      <Item>{!isAboutPage() && <ProfileCard />}</Item>
      <Item>
        <NewPosts />
      </Item>
    </Wrapper>
  )
}

const Item = styled.div`
  margin-bottom: 32px;
`
