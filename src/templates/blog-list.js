import React from 'react'
import {useStaticQuery ,graphql} from 'gatsby'

import * as S from '../components/BlogList/styled'

import Layout from "../components/layout/index"
import Header from '../components/header'
import PostList from '../components/PostList'
import PostCard from '../components/postCard'
import Pagination from '../components/Pagination'

import SEO from "../components/seo"

const BlogList = (props) => {

  const listPosts = props.data.allMarkdownRemark.edges
  const postIndex = props.data.allMarkdownRemark.edges.length
  
  const {currentPage, numPages} = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`
  const showPagination = postIndex > 5 ? true : false
  return(
    <>
      <Layout>
        <SEO title="Home" />
        {isFirst && <Header/>}
        {isFirst && <S.PostBegining>Últimos Posts:</S.PostBegining>}
        {!isFirst && <S.PostEnding>Posts mais antigos:</S.PostEnding>}
          <PostList>
            {listPosts.map(({node}) => (
                <PostCard
                  img={node.frontmatter.image.childImageSharp.fluid.src}
                  link={node.fields.slug}
                  category={node.frontmatter.category}
                  date={node.frontmatter.date}
                  title={node.frontmatter.title}
                />
              )
            )}  
          </PostList>
        {showPagination && <Pagination isFirst={isFirst} isLast={isLast} currentPage={currentPage} numPages={numPages} prevPage={prevPage} nextPage={nextPage} />}
        {isLast && <Pagination isFirst={isFirst} isLast={isLast} currentPage={currentPage} numPages={numPages} prevPage={prevPage} nextPage={nextPage} />}
      </Layout>
    </>
  )
}

export const query = graphql`
  query ListPost($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}
    limit: $limit
    skip: $skip
    ){
      edges {
        node {
          fields{
            slug 
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [ de ] MMMM [de] YYYY")
            title
            image {
            childImageSharp {
              fluid(maxHeight: 250, maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
          }
        }
      }
    }
  }
`

export default BlogList