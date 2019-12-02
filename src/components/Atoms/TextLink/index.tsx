import React from "react"
import styles from "./styles"

type Props = {
  children: React.ReactNode
  to: string
  className?: string
}

const { StyledLink } = styles

export const TextLink: React.FC<Props> = props => {
  return (
    <StyledLink to={props.to} className={props.className}>
      {props.children}
    </StyledLink>
  )
}
