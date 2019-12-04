import styled from "styled-components"
import Img from "gatsby-image"

const MainVisual = styled(Img)`
  width: 100%;
  height: 300px;
`

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 120px;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 60px;
  }
`

const Main = styled.main`
  width: 55%;
  margin: 4px 24px;

  @media (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
  }
`

export default {
  MainVisual,
  MainLayout,
  Main,
}
