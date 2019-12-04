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
  color: rgba(255, 255, 255, 0.9);
  background-color: ${secondary};
  border-radius: 2px;
`

const PostContent = styled.p`
  margin-top: 10px;
`

export default {
  Card,
  CardContent,
  Published,
  PostContent,
}
