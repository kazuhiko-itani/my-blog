import styled from "styled-components"
import { Link } from "gatsby"
import Breakpoint from "../GlobalStyle/breakpoint"

const StyledFooter = styled.div`
  background-color: #251f1e;
  height: 100%;
`

const Inner = styled.div`
  padding: 40px 120px;

  @media (max-width: ${Breakpoint.sp}) {
    padding: 30px 20px;
  }
`

const List = styled.ul`
  padding: 0;
  padding-bottom: 30px;
`

const ListItem = styled.li`
  font-size: 14px;
  margin-top: 20px;
`

const Line = styled.hr`
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  height: 1px;
`

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
`

const CopyRight = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  margin-top: 30px;
`

export default {
  StyledFooter,
  Inner,
  List,
  ListItem,
  Line,
  StyledLink,
  CopyRight,
}
