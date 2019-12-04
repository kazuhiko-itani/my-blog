import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { MyIconImageQuery } from "../../types/graphql-types"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { HeadingH2, HeadingH3 } from "../components/Atoms/Heading"

type Props = {
  data: MyIconImageQuery
}

const AboutPage: React.FC<Props> = props => {
  const image: any = props.data.MyIconImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <MyIcon fluid={image} />
        <div>
          <HeadingH2>プロフィール</HeadingH2>
          <div>
            <HeadingH3>経歴</HeadingH3>
            <p>
              2018年11月からWebエンジニア。コーヒーが好き。このブログはGatsbyで構成されていて、主に技術系の記事をアップしています。
            </p>
          </div>
          <div>
            <HeadingH3>使える技術</HeadingH3>
            <ul>
              <li>Laravel(PHP)</li>
              <li>React</li>
              <li>Vue.js(Nuxt.js)</li>
              <li>TypeScript</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Terraform</li>
            </ul>
          </div>
        </div>
      </Content>
      About Page
    </Layout>
  )
}

export const query = graphql`
  query MyIconImage {
    MyIconImage: file(relativePath: { eq: "Icon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const MyIcon = styled(Img)`
  width: 20%;
`
