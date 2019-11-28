import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: #fff;
`

const Inner = styled.div`
  padding: 10px 35px;
`

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.5);
`

export default {
  StyledHeader,
  Inner,
  StyledLink,
}
