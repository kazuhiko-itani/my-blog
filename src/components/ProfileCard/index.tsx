import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import styles from "./styles"
import { ProfileImageQuery } from "../../../types/graphql-types"

import { HeadingH3 } from "../Atoms/Heading"
import { TextLink } from "../Atoms/TextLink"

const { ContentWrapper, Text, MyIcon } = styles

const ProfileCard: React.FC = () => {
  const data: ProfileImageQuery = useStaticQuery(graphql`
    query {
      ProfileImage: file(relativePath: { eq: "Icon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image: any = data.ProfileImage.childImageSharp.fluid

  return (
    <div>
      <Header>
        <HeadingH3>Profile</HeadingH3>
      </Header>
      <ContentWrapper>
        <MyIcon fluid={image} />
        <Text>
          Webエンジニアです。30歳。フロントエンドが好き・得意。プロフィールは
          <TextLink to="/about">こちら</TextLink>
        </Text>
      </ContentWrapper>
    </div>
  )
}

export default ProfileCard

const Header = styled.div`
  border: 2px solid #d9d9d9;
  padding: 0;
  text-align: center;
`
