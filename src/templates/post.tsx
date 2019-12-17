import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { PostContext } from "../../gatsby-node"

import SEO from "../components/seo"
import { PostLayout } from "../components/PostLayout"
import { HeadingH2 } from "../components/Atoms/Heading"
import Breakpoint from "../components/GlobalStyle/breakpoint"

import Prism from "prismjs"
import "prismjs/components/prism-markup-templating"
import "prismjs/components/prism-php.min"
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

  const postData = props.pathContext.post

  const categoryLink = `/category/${postData.category.name.toLowerCase()}`
  const contentHtml = postData.content.childMarkdownRemark.html

  return (
    <PostLayout url={props.location.href} title={postData.title}>
      <SEO
        title={postData.title}
        description={postData.description.description}
        url={props.location.href}
      />
      <ContentWrapper>
        <Title>{postData.title}</Title>
        <div>
          <Category to={categoryLink}>{postData.category.name}</Category>
        </div>
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
  margin-bottom: 12px;
`

const Category = styled(Link)`
  font-size: 14px;
  display: inline-block;
  color: #333;
  padding: 0 8px;
  background-color: #d9d9d9;
  border-radius: 20px;

  &:hover {
    text-decoration: none;
  }
`

const Content = styled.article`
  margin-top: 30px;
`
