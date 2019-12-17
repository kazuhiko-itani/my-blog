import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import * as moment from "moment"

import { HeadingH2 } from "../Atoms/Heading"
import styles from "./style"

type Props = {
  image: string
  publishedAt: string
  title: string
  slug: string
  excerpt: string
  category: string
  className?: string
}

const { Card, CardContent, Published, Category, PostContent } = styles

export const PostCard: React.FC<Props> = props => {
  const postLink = `/posts/${props.category.toLowerCase()}/${props.slug}`
  const categoryLink = `/category/${props.category.toLowerCase()}`

  return (
    <Card className={props.className}>
      <div>
        <Link to={postLink}>
          <img src={props.image} />
        </Link>
      </div>
      <CardContent>
        <div>
          <Published>
            {moment(props.publishedAt).format("YYYY-MM-DD")}
          </Published>
        </div>
        <div>
          <Category to={categoryLink}>{props.category}</Category>
        </div>
        <StyledHeadingH2>
          <StyledTextLink to={postLink}>{props.title}</StyledTextLink>
        </StyledHeadingH2>
        <PostContent>{props.excerpt}</PostContent>
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
`
