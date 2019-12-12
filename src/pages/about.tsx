import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { ProfileQuery } from "../../types/graphql-types"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Breakpoint from "../components/GlobalStyle/breakpoint"
import { HeadingH2, HeadingH3 } from "../components/Atoms/Heading"

type Props = {
  path: string
  data: ProfileQuery
}

const AboutPage: React.FC<Props> = props => {
  const image: any = props.data.ProfileImage.childImageSharp.fluid

  const usefulLanguage = [
    "Laravel(PHP)",
    "React",
    "Vue.js(Nuxt.js)",
    "TypeScript",
    "AWS",
    "Docker",
    "Terraform",
  ]

  return (
    <Layout pathname={props.path}>
      <SEO title="About" />
      <Content>
        <IconWrapper>
          <Icon fluid={image} />
        </IconWrapper>
        <div>
          <HeadingH2>プロフィール</HeadingH2>
          <div>
            <StyledHeadingH3>名前</StyledHeadingH3>
            <Text>あかしぃ</Text>
          </div>
          <div>
            <StyledHeadingH3>経歴</StyledHeadingH3>
            <Text>
              2018年11月からWebエンジニア。コーヒーが好き。
              <br />
              このブログはGatsbyで構成されていて、主に技術系の記事をアップしています。
            </Text>
          </div>
          <div>
            <StyledHeadingH3>使える技術</StyledHeadingH3>
            <List>
              {usefulLanguage.map((language, index) => {
                return <ListItem key={index}>・{language}</ListItem>
              })}
            </List>
          </div>
          <StyledHeadingH3>各種リンク</StyledHeadingH3>
          <Text>
            Twitter：{" "}
            <a
              href="https://twitter.com/akashi__akashi"
              target="_blank"
              rel="noreferrer noopener"
            >
              @akashi__akashi
            </a>
          </Text>
          <Text>
            Qiita：{" "}
            <a
              href="https://qiita.com/akashixi"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://qiita.com/akashixi
            </a>
          </Text>
          <Text>
            GitHub：{" "}
            <a
              href="https://github.com/kazuhiko-itani"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://github.com/kazuhiko-itani
            </a>
          </Text>
        </div>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query ProfileImage {
    ProfileImage: file(relativePath: { eq: "Icon.jpg" }) {
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

  @media (max-width: ${Breakpoint.sp}) {
    flex-direction: column;
  }
`

const IconWrapper = styled.div`
  width: 25%;

  @media (max-width: ${Breakpoint.sp}) {
    width: 100%;
  }
`

const Icon = styled(Img)`
  width: 100%;

  @media (max-width: ${Breakpoint.sp}) {
    width: 80%;
    margin: 0 auto;
  }
`

const StyledHeadingH3 = styled(HeadingH3)`
  margin-top: 32px;
`

const Text = styled.p`
  margin-top: 16px;
`

const List = styled.ul`
  padding: 0;
  margin-top: 16px;
`

const ListItem = styled.li`
  margin-top: 12px;
`
