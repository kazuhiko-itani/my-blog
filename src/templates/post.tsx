import React from "react"
import styled from "styled-components"
import { PostContext } from "../../gatsby-node"

import { PostLayout } from "../components/PostLayout"
import { HeadingH2 } from "../components/Atoms/Heading"
import Breakpoint from "../components/GlobalStyle/breakpoint"

type Props = {
  pathContext: PostContext
}

const Post: React.FC<Props> = ({ pathContext }) => {
  const postTitle = pathContext.post.title
  const contentHtml = pathContext.post.content.childMarkdownRemark.html

  return (
    <PostLayout>
      <ContentWrapper>
        <Title>{postTitle}</Title>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </Content>
      </ContentWrapper>
    </PostLayout>
  )
}

export default Post

const ContentWrapper = styled.div`
  width: 50%;
  margin: 50px auto;

  @media (max-width: ${Breakpoint.sp}) {
    width: 100%;
    margin: 50px 20px;
  }
`

const Title = styled(HeadingH2)`
  font-size: 28px;
  margin-bottom: 20px;
`

const Content = styled.article`
  margin-top: 30px;
`
