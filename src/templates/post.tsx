import React from "react"
import Layout from "../components/Layout"
import { PostContext } from "../../gatsby-node"

type Props = {
  pathContext: PostContext
}

const Post: React.FC<Props> = ({ pathContext }) => {
  const contentHtml = pathContext.post.content.childMarkdownRemark.html

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  )
}

export default Post
