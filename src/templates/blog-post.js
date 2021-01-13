import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import RecommendedPosts from '../components/RecommendedPost'
import Comments from '../components/Comments'

import * as S from '../components/Post/styled'

const BlogPost = ({data, pageContext}) => {

  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return(
    <Layout>
      <SEO title={post.frontmatter.title} image={post.frontmatter.image.childImageSharp.fluid.src}/>
      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date} - {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.ImageContent src={post.frontmatter.image.childImageSharp.fluid.src}></S.ImageContent>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{__html: post.html}}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous}></RecommendedPosts>
      <Comments url={post.fields.slug} title={post.frontmatter.title}/>
    </Layout>

  )

}

export const query = graphql`
  query Post($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    fields{
      slug
    }
    frontmatter {
      title
      category
      date(locale: "pt-br", formatString: "DD [ de ] MMMM [de] YYYY")
      image {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 500, quality: 100) {
            src
          }
        }
      }
    }
    html
    timeToRead
  }
}
` 

export default BlogPost