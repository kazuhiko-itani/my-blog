import styled from "styled-components"
import Breakpoint from "../GlobalStyle/breakpoint"

const Main = styled.main`
  margin: 50px 74px 120px 74px;

  @media (max-width: ${Breakpoint.sp}) {
    margin: 40px 0 80px;
  }
`

export default {
  Main,
}
