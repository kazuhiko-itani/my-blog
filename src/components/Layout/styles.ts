import styled from "styled-components"
import Img from "gatsby-image"

const MainVisual = styled(Img)`
  width: 100%;
  height: 300px;
`

const Main = styled.main`
  margin: 50px 74px 120px 74px;

  @media (max-width: 767px) {
    margin: 40px 20px 80px;
  }
`

export default {
  MainVisual,
  Main,
}
