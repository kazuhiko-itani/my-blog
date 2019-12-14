import styled from "styled-components"
import { Link } from "gatsby"
import Breakpoint from "../GlobalStyle/breakpoint"
import { HeadingH4 } from "../Atoms/Heading"

const Header = styled.div`
  border: 2px solid #d9d9d9;
  padding: 10px 0;
  text-align: center;
`

const PostsWrapper = styled.div`
  padding: 12px;
  border: 1px solid #d9d9d9;
  border-top: none;
`

const Post = styled.div`
  padding-top: 8px;
`

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: ${Breakpoint.sp}) {
    height: 150px;
  }
`

const Title = styled(HeadingH4)`
  margin-top: 8px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const TitleLink = styled(Link)`
  color: #333;
`

const PublishedAt = styled.div`
  font-size: 12px;
  text-align: right;
  margin-bottom: 4px;
`

const Line = styled.hr`
  border: 1px solid #d9d9d9;
  margin: 0;
`

export default {
  Header,
  PostsWrapper,
  Post,
  Image,
  Title,
  TitleLink,
  PublishedAt,
  Line,
}
