const path = require("path")
import { GatsbyNode } from "gatsby"
import {
  ContentfulPostConnection,
  ContentfulPost,
} from "../types/graphql-types"

type Result = {
  allContentfulPost: ContentfulPostConnection
}

export type PostContext = {
  post: ContentfulPost
}

const query = `
{
  allContentfulPost {
    edges {
      node {
        content {
          childMarkdownRemark {
            html
          }
          content
        }
        publishedAt
        slug
        title
        description {
          description
        }
        updatedAt
        image {
          fluid {
            src
          }
        }
        category {
          name
        }
      }
    }
  }
}
`

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<Result>(query)
  const { edges } = result.data.allContentfulPost

  const postTemplate = path.resolve("./src/templates/post.tsx")

  edges.forEach(edge => {
    createPage<PostContext>({
      path: `/posts/${edge.node.category.name.toLowerCase()}/${edge.node.slug}`,
      component: postTemplate,
      context: { post: edge.node },
    })
  })
}
