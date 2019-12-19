import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "./styles"
import { NewPostsQuery } from "../../../types/graphql-types"
import * as moment from "moment"

import { HeadingH3 } from "../Atoms/Heading"

const {
  Header,
  PostsWrapper,
  Post,
  Image,
  Title,
  TitleLink,
  PublishedAt,
  Line,
} = styles

const NewPosts: React.FC = () => {
  const newPosts: NewPostsQuery = useStaticQuery(graphql`
    query NewPosts {
      allContentfulPost(limit: 5, sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            image {
              fluid {
                src
              }
            }
            publishedAt
            slug
            title
            id
            category {
              name
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Header>
        <HeadingH3>New Posts</HeadingH3>
      </Header>
      <PostsWrapper>
        {newPosts.allContentfulPost.edges.map((edge, index) => {
          return (
            <Post key={edge.node.id}>
              <Link
                to={`/${edge.node.category.name.toLowerCase()}/${
                  edge.node.slug
                }`}
                aria-label={edge.node.title}
              >
                <Image src={edge.node.image.fluid.src} alt={edge.node.title} />
              </Link>
              <Title>
                <TitleLink
                  to={`/${edge.node.category.name.toLowerCase()}/${
                    edge.node.slug
                  }`}
                  aria-label={edge.node.title}
                >
                  {edge.node.title}
                </TitleLink>
              </Title>
              <PublishedAt>
                <span>
                  {moment(edge.node.publishedAt).format("YYYY-MM-DD")}
                </span>
              </PublishedAt>
              {newPosts.allContentfulPost.edges.length - 1 !== index && (
                <Line />
              )}
            </Post>
          )
        })}
      </PostsWrapper>
    </div>
  )
}

export default NewPosts
