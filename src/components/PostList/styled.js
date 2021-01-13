import styled from 'styled-components'
import media from "styled-media-query"


export const Container = styled.section`

  max-width: 1250px;
  margin: 0 auto;
  padding: 0rem 0 5rem;
  ${media.lessThan("medium")`
    padding: 0 0 2rem;
  `}
  
`

export const PostList = styled.section`
  padding: 2rem 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`