import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import * as S from './styled'
import {Carousel} from 'react-bootstrap'


const HeaderPodcast = () => {

  const {allMarkdownRemark} = useStaticQuery(graphql`
    query BannerPodcastList {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: "Podcast"}}}, limit: 3) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              date(locale: "pt-br", formatString: "DD [ de ] MMMM [de] YYYY")
              title
              image {
                childImageSharp {
                  fluid(maxHeight: 720, maxWidth: 1280, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }`)

  const listBanner = allMarkdownRemark.edges
    
  return(
    <S.HeaderSection>
      <Carousel interval={6000} >
        {listBanner.map(({node}) => (
          <Carousel.Item>
            <S.link to={node.fields.slug}>
              <S.WrapperItens>
                <S.Tag>{node.frontmatter.category}</S.Tag>
                <S.Title>{node.frontmatter.title}</S.Title>
              </S.WrapperItens>
              <S.Img src={node.frontmatter.image.childImageSharp.fluid.src}></S.Img>
            </S.link>
          </Carousel.Item>
        ))}
      </Carousel>
    </S.HeaderSection>
    )
}

export default HeaderPodcast