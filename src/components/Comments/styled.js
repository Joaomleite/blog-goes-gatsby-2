import styled from "styled-components"

import media from "styled-media-query"

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;


  ${media.lessThan("large")`
    padding: 3rem 2.4rem 3rem;
  `}
  
  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    a {
      color: #1fa1f2 !important;
    }
  }
  
`

export const CommentsTitle = styled.h2`
  color: #fff;
  font-size: 2.rem;
  font-weight: 700;
  padding-bottom: 2rem;

  ${media.lessThan("large")`
    font-size: 1.375rem;
  `}
`