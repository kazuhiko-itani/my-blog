import React from "react"
import styles from "./styles"
import styled from "styled-components"

import ProfileCard from "../ProfileCard"
import NewPosts from "../NewPosts"

type Props = {
  className?: string
}

const { Wrapper } = styles

const SideBar: React.FC<Props> = props => {
  const isAboutPage = (): boolean => {
    return /^\/about/.test(location.pathname)
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

export default SideBar

const Item = styled.div`
  margin-bottom: 32px;
`
