import React from "react"
import styles from "./styles"

const { StyledHeader, Inner, StyledLink } = styles

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Inner>
        <ul>
          <li>
            <StyledLink to="/about">ABOUT ME</StyledLink>
          </li>
        </ul>
      </Inner>
    </StyledHeader>
  )
}

export default Header
