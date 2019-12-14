import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

interface Props {
  location: {
    href: string
  }
  path: string
}

const NotFoundPage: React.FC<Props> = props => (
  <Layout pathname={props.path} url={props.location.href} title="Not Found">
    <SEO title="404: Not found" url={props.location.href} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
