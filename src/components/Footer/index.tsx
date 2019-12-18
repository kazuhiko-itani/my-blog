import React from "react"
import styles from "./styles"

const {
  StyledFooter,
  Inner,
  List,
  ListItem,
  StyledLink,
  Line,
  CopyRight,
} = styles

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Inner>
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
        <Line />
        <CopyRight>&copy; 2019 Akashixi</CopyRight>
      </Inner>
    </StyledFooter>
  )
}

export default Footer
