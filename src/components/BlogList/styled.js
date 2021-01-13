import styled from 'styled-components'
import media from "styled-media-query"


export const PostBegining = styled.h1`
  font-size: 2.0rem;
  color:#fff;
  font-weight: bold;
  margin-left: 10rem;
  margin-top: 2rem;
  ${media.lessThan("medium")`
    margin-left: 1rem;
  `}
`

export const PostEnding = styled.h1`
  font-size: 2.0rem;
  color:#fff;
  font-weight: bold;
  margin-left: 10rem;
  margin-top: 7rem;
  ${media.lessThan("medium")`
    margin-left: 1rem;
  `}
`