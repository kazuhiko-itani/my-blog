const path = require("path")
import { GatsbyNode } from "gatsby"
import {
  ContentfulPostConnection,
  ContentfulPostEdge,
  ContentfulPost,
  ContentfulCategoryConnection,
  ContentfulCategory,
} from "../types/graphql-types"

type Result = {
  allContentfulPost: ContentfulPostConnection
  allContentfulCategory: ContentfulCategoryConnection
}

export type PostContext = {
  post: ContentfulPost
}

export type CategoryContext = {
  category: ContentfulCategory
  posts: ContentfulPostEdge[]
}

const query = `
{
  allContentfulPost {
    edges {
      node {
        id
        slug
        title
        description {
          description
        }
        category {
          name
        }
        content {
          childMarkdownRemark {
            html
            excerpt
          }
          content
        }
        image {
          fluid {
            src
          }
        }
        publishedAt
        updatedAt
      }
    }
  }

  allContentfulCategory {
    edges {
      node {
        name
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

  const postTemplate = path.resolve("./src/templates/post.tsx")

  result.data.allContentfulPost.edges.forEach(edge => {
    createPage<PostContext>({
      path: `/${edge.node.category.name.toLowerCase()}/${edge.node.slug}`,
      component: postTemplate,
      context: { post: edge.node },
    })
  })

  const categoryTemplate = path.resolve("./src/templates/category.tsx")

  result.data.allContentfulCategory.edges.forEach(edge => {
    const posts = result.data.allContentfulPost.edges.filter(post => {
      return post.node.category.name === edge.node.name
    })

    createPage<CategoryContext>({
      path: `/category/${edge.node.name.toLowerCase()}`,
      component: categoryTemplate,
      context: {
        category: edge.node,
        posts: posts,
      },
    })
  })
}
