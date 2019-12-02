import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: #fff;
`

const Inner = styled.div`
  padding: 10px 74px;

  @media (max-width: 767px) {
    padding: 10px 20px;
  }
`

const List = styled.ul`
  display: flex;
  padding: 12px 0;

  @media (max-width: 767px) {
    padding-left: 0;
  }
`

const ListItem = styled.li`
  margin-right: 16px;
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
