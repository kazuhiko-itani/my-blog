import React from "react"
import { graphql } from "gatsby"
import { AllPostQuery } from "../../types/graphql-types"
import styled from "styled-components"
import * as moment from "moment"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Breakpoint from "../components/GlobalStyle/breakpoint"
import PostCard from "../components/PostCard"

type Props = {
  path: string
  location: {
    href: string
  }
  data: AllPostQuery
}

const IndexPage: React.FC<Props> = props => {
  return (
    <Layout
      url={props.location.href}
      pathname={props.path}
      title="トップページ"
    >
      <SEO title="Home" url={props.location.href} />
      <Posts>
        {props.data.allContentfulPost.edges.map(edge => {
          return (
            <StyledPostCard
              key={edge.node.id}
              image={edge.node.image.fluid.src}
              publishedAt={moment(edge.node.publishedAt).format("YYYY-MM-DD")}
              title={edge.node.title}
              slug={edge.node.slug}
              excerpt={edge.node.content.childMarkdownRemark.excerpt}
              category={edge.node.category.name}
            />
          )
        })}
      </Posts>
    </Layout>
  )
}

export const query = graphql`
  query AllPost {
    allContentfulPost(sort: { order: DESC, fields: publishedAt }) {
      edges {
        node {
          content {
            childMarkdownRemark {
              html
              excerpt(truncate: true, pruneLength: 100)
            }
          }
          publishedAt
          slug
          title
          updatedAt
          image {
            fluid {
              src
            }
          }
          id
          category {
            name
          }
        }
      }
    }
  }
`

export default IndexPage

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
