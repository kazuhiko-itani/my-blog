import React from "react"
import styles from "./styles"

import ProfileCard from "../ProfileCard"

type Props = {
  className?: string
}

const { Wrapper } = styles

const SideBar: React.FC<Props> = props => {
  return (
    <Wrapper className={props.className}>
      <ProfileCard />
    </Wrapper>
  )
}

export default SideBar
