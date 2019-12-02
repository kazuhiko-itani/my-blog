import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.div`
  background-color: #251f1e;
  height: 250px;
`

const Inner = styled.div`
  padding: 40px 74px;

  @media (max-width: 767px) {
    padding: 30px 20px;
  }
`

const List = styled.ul`
  padding: 0;
  padding-bottom: 30px;
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
  Line,
  StyledLink,
  CopyRight,
}
