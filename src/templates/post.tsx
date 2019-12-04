import React from "react"
import styled from "styled-components"
import { PostContext } from "../../gatsby-node"

import { PostLayout } from "../components/PostLayout"
import { HeadingH2 } from "../components/Atoms/Heading"

type Props = {
  pathContext: PostContext
}

const Post: React.FC<Props> = ({ pathContext }) => {
  const postTitle = pathContext.post.title
  const contentHtml = pathContext.post.content.childMarkdownRemark.html

  return (
    <PostLayout>
      <ImageWrapper>
        <Image src={pathContext.post.image.fluid.src} />
      </ImageWrapper>
      <ContentWrapper>
        <HeadingH2>{postTitle}</HeadingH2>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </Content>
      </ContentWrapper>
    </PostLayout>
  )
}

export default Post

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100vw;
  }
`

const Image = styled.img`
  width: 50%;
  height: 300px;

  @media (max-width: 767px) {
    width: 100%;
  }
`

const ContentWrapper = styled.div`
  width: 50%;
  margin: 50px auto;

  @media (max-width: 767px) {
    width: 100%;
    margin: 50px 20px;
  }
`

const Content = styled.article`
  margin-top: 30px;
`
