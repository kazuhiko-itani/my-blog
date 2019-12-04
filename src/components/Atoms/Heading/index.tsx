import * as React from "react"
import styles from "./style"

interface HeadingProps {
  className?: string
}

const { StyledHeadingH2, StyledHeadingH3, StyledHeadingH4 } = styles

export const HeadingH2: React.FC<HeadingProps> = props => {
  return (
    <StyledHeadingH2 className={props.className}>
      {props.children}
    </StyledHeadingH2>
  )
}

export const HeadingH3: React.FC<HeadingProps> = props => {
  return (
    <StyledHeadingH3 className={props.className}>
      {props.children}
    </StyledHeadingH3>
  )
}

export const HeadingH4: React.FC<HeadingProps> = props => {
  return (
    <StyledHeadingH4 className={props.className}>
      {props.children}
    </StyledHeadingH4>
  )
}
