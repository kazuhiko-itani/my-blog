import React from "react"
import styles from "./styles"

const { StyledHeader, Inner, List, ListItem, StyledLink } = styles

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Inner>
        <nav>
          <List>
            <ListItem>
              <StyledLink to="/" aria-label="HOME">
                HOME
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/about" aria-label="ABOUT ME">
                ABOUT ME
              </StyledLink>
            </ListItem>
          </List>
        </nav>
      </Inner>
    </StyledHeader>
  )
}
