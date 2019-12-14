import { Link } from "gatsby"
import styled from "styled-components"
import Breakpoint from "../GlobalStyle/breakpoint"

const StyledHeader = styled.header`
  background-color: #fff;
`

const Inner = styled.div`
  padding: 0 120px;

  @media (max-width: ${Breakpoint.sp}) {
    padding: 10px 20px;
  }
`

const List = styled.ul`
  display: flex;
  padding: 4px 0;

  @media (max-width: ${Breakpoint.sp}) {
    padding-left: 0;
  }
`

const ListItem = styled.li`
  font-size: 14px;
  margin-right: 32px;

  @media (max-width: ${Breakpoint.sp}) {
    margin-right: 20px;
  }
`

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.5);
`

export default {
  StyledHeader,
  Inner,
  List,
  ListItem,
  StyledLink,
}
