import { Link } from "gatsby"
import styled from "styled-components"
import color from "../GlobalStyle/color"
import Breakpoint from "../GlobalStyle/breakpoint"

const { secondary } = color

const Card = styled.div`
  width: 48%;
  height: 100%;
  margin-bottom: 40px;

  @media (max-width: ${Breakpoint.sp}) {
    width: 100%;
  }
`

const CardContent = styled.div`
  padding: 20px 0;
`

const Published = styled.span`
  padding: 5px 10px;
  margin-top: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  background-color: ${secondary};
  border-radius: 2px;
`

const Category = styled(Link)`
  display: inline-block;
  font-size: 14px;
  color: #333;
  margin: 8px 0;
  padding: 2px 8px;
  background-color: #d9d9d9;
  border-radius: 20px;

  &:hover {
    text-decoration: none;
  }
`

const PostContent = styled.p`
  font-size: 14px;
  margin-top: 10px;
`

export default {
  Card,
  CardContent,
  Published,
  Category,
  PostContent,
}
