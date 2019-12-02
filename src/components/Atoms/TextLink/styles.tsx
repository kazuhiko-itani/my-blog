import styled from "styled-components"
import { Link } from "gatsby"
import color from "../../GlobalStyle/color"

const { secondary } = color

const StyledLink = styled(Link)`
  color: #333;

  &:hover {
    color: ${secondary};
    transition: all 0.2s;
  }
`

export default {
  StyledLink,
}
