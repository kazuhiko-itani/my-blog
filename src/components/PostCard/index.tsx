import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import * as moment from "moment"

import { HeadingH2 } from "../Atoms/Heading"
import { TextLink } from "../Atoms/TextLink"
import styles from "./style"

type Props = {
  image: string
  publishedAt: string
  title: string
  slug: string
  excerpt: string
  className?: string
}

const { Card, CardContent, Published, PostContent } = styles

export const PostCard: React.FC<Props> = props => {
  return (
    <Card className={props.className}>
      <div>
        <Link to={`/posts/${props.slug}`}>
          <img src={props.image} />
        </Link>
      </div>
      <CardContent>
        <Published>{moment(props.publishedAt).format("YYYY-MM-DD")}</Published>
        <StyledHeadingH2>
          <TextLink to={`/posts/${props.slug}`}>{props.title}</TextLink>
        </StyledHeadingH2>
        <PostContent>{props.excerpt}</PostContent>
      </CardContent>
    </Card>
  )
}

export default PostCard

const StyledHeadingH2 = styled(HeadingH2)`
  margin-top: 10px;
`
