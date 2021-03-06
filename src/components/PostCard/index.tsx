import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import * as moment from "moment"

import { HeadingH2 } from "../Atoms/Heading"
import styles from "./styles"

type Props = {
  image: string
  publishedAt: string
  title: string
  slug: string
  excerpt: string
  category: string
  className?: string
}

const {
  Card,
  CardImage,
  CardContent,
  Published,
  Category,
  PostContent,
} = styles

export const PostCard: React.FC<Props> = props => {
  const postLink = `/${props.category.toLowerCase()}/${props.slug}`
  const categoryLink = `/category/${props.category.toLowerCase()}`

  return (
    <Card className={props.className}>
      <CardImage>
        <Link to={postLink} aria-label={props.title}>
          <img src={props.image} alt={props.title} />
        </Link>
      </CardImage>
      <CardContent>
        <div>
          <Published>
            {moment(props.publishedAt).format("YYYY-MM-DD")}
          </Published>
        </div>
        <div>
          <Category to={categoryLink} aria-label={categoryLink}>
            {props.category}
          </Category>
        </div>
        <StyledTextLink to={postLink} aria-label={props.title}>
          <StyledHeadingH2>{props.title}</StyledHeadingH2>
          <PostContent>{props.excerpt}</PostContent>
        </StyledTextLink>
      </CardContent>
    </Card>
  )
}

export default PostCard

const StyledHeadingH2 = styled(HeadingH2)`
  margin-top: 4px;
`

const StyledTextLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: none;

    h2 {
      text-decoration: underline;
    }
  }
`
