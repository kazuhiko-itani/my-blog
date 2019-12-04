import React from "react"
import styles from "./styles"

import ProfileCard from "../ProfileCard"

type Props = {
  className?: string
}

const { Wrapper } = styles

const SideBar: React.FC<Props> = props => {
  const isAboutPage = (): boolean => {
    return /^\/about\/$/.test(location.pathname)
  }

  return (
    <Wrapper className={props.className}>
      {!isAboutPage && <ProfileCard />}
    </Wrapper>
  )
}

export default SideBar
