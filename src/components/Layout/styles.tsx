import styled from "styled-components"
import Img from "gatsby-image"
import Breakpoint from "../GlobalStyle/breakpoint"

const MainVisual = styled(Img)`
  position: relative;
  width: 100%;
  height: 400px;
`

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 20px;

  @media (max-width: ${Breakpoint.sp}) {
    flex-direction: column;
    margin-bottom: 60px;
  }
`

const Main = styled.main`
  width: 55%;
  margin: 4px 24px;

  @media (max-width: ${Breakpoint.sp}) {
    width: 90%;
    margin: 0 auto;
  }
`

export default {
  MainVisual,
  MainLayout,
  Main,
}
