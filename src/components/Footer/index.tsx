import React from "react"
import styles from "./styles"

const { StyledFooter, Inner, List, StyledLink, Line, CopyRight } = styles

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Inner>
        <List>
          <li>
            <StyledLink to="/aoubt">ABOUT ME</StyledLink>
          </li>
        </List>
        <Line />
        <CopyRight>&copy; 2019 Akashixi</CopyRight>
      </Inner>
    </StyledFooter>
  )
}

export default Footer
