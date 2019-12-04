import styled from "styled-components"
import { Link } from "gatsby"
import color from "../../GlobalStyle/color"

const { secondary } = color

const StyledLink = styled(Link)`
  color: ${secondary};

  &:hover {
    text-decoration: underline;
  }
`

export default {
  StyledLink,
}
