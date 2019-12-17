import styled from "styled-components"
import Img from "gatsby-image"

const ContentWrapper = styled.div`
  padding: 20px 10px 0;
  border: 1px solid #d9d9d9;
  border-top: none;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 1.8;
`

const MyIcon = styled(Img)`
  width: 80%;
  margin: 0 auto;
`

export default {
  ContentWrapper,
  Text,
  MyIcon,
}
