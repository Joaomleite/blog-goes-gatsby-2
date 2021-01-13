import styled from 'styled-components'
import {Link} from 'gatsby'
import media from "styled-media-query"

export const HeaderSection = styled.section`
  max-width: 1250px;
  margin: 0 auto;
  border-radius: 60px;
  margin-top: 5rem;
  overflow: hidden;
  z-index:1;
  ${media.lessThan("medium")`
    border-radius: 0px;
    margin-top: 1rem;
  `}
`
export const Img = styled.img`
  width: 100%;
  height: 500px;
`

export const link = styled(Link)`
`
export const WrapperItens = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 1.4rem;
  display: flex;
  flex-direction: column;

`
export const Title = styled.h1`
  bottom: 2.5rem;
  left: 1.5rem;
  font-size: 2.7rem;
  color: #fff;
  font-weight: bold;
  ${media.lessThan("medium")`
    font-size: 2rem; 
  `}
  
`

export const Tag = styled.h2`
  align-self: flex-start;
  display: block;
  font-weight: bold;
  border-radius: 5px;
  padding: 1.0rem;
  margin-bottom: 1rem;
  color: #fff;
  border: 1px solid #bddaf0;
  text-align: center;
  font-size: 1.6rem; 
  ${media.lessThan("medium")`
    padding: 0.7rem;
    font-size: 1.5rem; 
  `}
  
`