import React from "react"
import styles from "./styles"
import { FacebookIcon, TwitterIcon } from "react-share"

type Props = {
  url: string
  size: number
  title: string
  className?: string
}

const {
  ShareText,
  SocialButtonArea,
  StyledFacebookShareButton,
  StyledTwitterShareButton,
} = styles

export const SocialButtons: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <ShareText>＼ SHARE ／</ShareText>
      <SocialButtonArea>
        <StyledFacebookShareButton url={props.url}>
          <FacebookIcon size={40} round />
        </StyledFacebookShareButton>
        <StyledTwitterShareButton
          url={props.url}
          title={`${props.title} | あかしぃの技術ブログ`}
          via="akashi__akashi"
        >
          <TwitterIcon size={40} round />
        </StyledTwitterShareButton>
      </SocialButtonArea>
    </div>
  )
}
