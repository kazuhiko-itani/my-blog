import React from "react"
import { graphql } from "gatsby"
import { AllPostQuery } from "../../types/graphql-types"
import styled from "styled-components"
import * as moment from "moment"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard"

type Props = {
  data: AllPostQuery
}

const IndexPage: React.FC<Props> = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Posts>
        {props.data.allContentfulPost.edges.map(edge => {
          return (
            <PostCard
              key={edge.node.id}
              image={edge.node.image.fluid.src}
              publishedAt={moment(edge.node.publishedAt).format("YYYY-MM-DD")}
              title={edge.node.title}
              slug={edge.node.slug}
              excerpt={edge.node.content.childMarkdownRemark.excerpt}
            />
          )
        })}
      </Posts>
    </Layout>
  )
}

export const query = graphql`
  query AllPost {
    allContentfulPost {
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
        }
      }
    }
  }
`

export default IndexPage

const Posts = styled.div`
  display: flex;
  justify-content: space-around;
`
