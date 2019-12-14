import styled from "styled-components"
import { FacebookShareButton, TwitterShareButton } from "react-share"

const ShareText = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-left: 2px;
  text-align: center;
`

const SocialButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`

const StyledFacebookShareButton = styled(FacebookShareButton)`
  margin-right: 16px;
  cursor: pointer;
`

const StyledTwitterShareButton = styled(TwitterShareButton)`
  margin-left: 16px;
  cursor: pointer;
`

export default {
  ShareText,
  SocialButtonArea,
  StyledFacebookShareButton,
  StyledTwitterShareButton,
}
