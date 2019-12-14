import styled from "styled-components"
import Img from "gatsby-image"

const ContentWrapper = styled.div`
  font-size: 14px;
  padding: 20px 10px;
  border: 1px solid #d9d9d9;
  border-top: none;
`

const MyIcon = styled(Img)`
  width: 80%;
  margin: 0 auto;
`

export default {
  ContentWrapper,
  MyIcon,
}
