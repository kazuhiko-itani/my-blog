import React from "react"
import styled from "styled-components"
import { PostContext } from "../../gatsby-node"

import { PostLayout } from "../components/PostLayout"
import { HeadingH2 } from "../components/Atoms/Heading"
import Breakpoint from "../components/GlobalStyle/breakpoint"

type Props = {
  pathContext: PostContext
  location: {
    href: string
  }
}

const Post: React.FC<Props> = props => {
  const postTitle = props.pathContext.post.title
  const contentHtml = props.pathContext.post.content.childMarkdownRemark.html

  return (
    <PostLayout url={props.location.href}>
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
    width: 92%;
    margin: 50px auto;
  }
`

const Title = styled(HeadingH2)`
  font-size: 28px;
  margin-bottom: 20px;
`

const Content = styled.article`
  margin-top: 30px;
`
