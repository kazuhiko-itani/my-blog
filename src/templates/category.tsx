import React from "react"
import styled from "styled-components"
import * as moment from "moment"
import { CategoryContext } from "../../gatsby-node"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Breakpoint from "../components/GlobalStyle/breakpoint"
import PostCard from "../components/PostCard"

type Props = {
  pathContext: CategoryContext
  path: string
  location: {
    href: string
  }
}

const Category: React.FC<Props> = props => {
  return (
    <Layout
      url={props.location.href}
      pathname={props.path}
      title={props.pathContext.category.name}
    >
      <SEO title={props.pathContext.category.name} url={props.location.href} />
      <Posts>
        {props.pathContext.posts.map(post => {
          console.log(post)
          return (
            <StyledPostCard
              key={post.node.id}
              image={post.node.image.fluid.src}
              publishedAt={moment(post.node.publishedAt).format("YYYY-MM-DD")}
              title={post.node.title}
              slug={post.node.slug}
              excerpt={post.node.content.childMarkdownRemark.excerpt}
              category={post.node.category.name}
            />
          )
        })}
      </Posts>
    </Layout>
  )
}

export default Category

const Posts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${Breakpoint.sp}) {
    display: block;
  }
`

const StyledPostCard = styled(PostCard)`
  @media (max-width: ${Breakpoint.sp}) {
    margin-bottom: 20px;
  }
`