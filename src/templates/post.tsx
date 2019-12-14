import React from "react"
import styled from "styled-components"
import { PostContext } from "../../gatsby-node"

import SEO from "../components/seo"
import { PostLayout } from "../components/PostLayout"
import { HeadingH2 } from "../components/Atoms/Heading"
import Breakpoint from "../components/GlobalStyle/breakpoint"

import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
import "prismjs/components/prism-tsx.min"
import "prismjs/components/prism-typescript.min"
import "prismjs/components/prism-json.min"
import "../assets/css/prism.css"

type Props = {
  pathContext: PostContext
  location: {
    href: string
  }
}

const Post: React.FC<Props> = props => {
  React.useEffect(() => {
    Prism.highlightAll()
  })

  const postTitle = props.pathContext.post.title
  const contentHtml = props.pathContext.post.content.childMarkdownRemark.html

  return (
    <PostLayout url={props.location.href} title={postTitle}>
      <SEO
        title={postTitle}
        description={props.pathContext.post.description.description}
        url={props.location.href}
      />
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
