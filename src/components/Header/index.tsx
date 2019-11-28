import React from "react"
import { Link } from "gatsby"
import styles from "./styles"

const { StyledHeader } = styles

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <ul>
        <li>
          <Link to="/about">ABOUT ME</Link>
        </li>
      </ul>
    </StyledHeader>
  )
}
