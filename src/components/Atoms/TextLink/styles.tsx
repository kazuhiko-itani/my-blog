import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`

export default {
  StyledLink,
}
