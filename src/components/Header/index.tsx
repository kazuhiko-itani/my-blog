import React from "react"
import styles from "./styles"

const { StyledHeader, Inner, List, ListItem, StyledLink } = styles

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Inner>
        <List>
          <ListItem>
            <StyledLink to="/">HOME</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/about">ABOUT ME</StyledLink>
          </ListItem>
        </List>
      </Inner>
    </StyledHeader>
  )
}

export default Header
