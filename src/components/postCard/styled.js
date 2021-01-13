import styled from 'styled-components'
import {Link} from 'gatsby'


export const Card = styled(Link)`
  padding:0 0 1rem;
  min-width: 5rem;
  margin: 1rem 0.4rem;
  background-color: #1C2C3D;
  border-radius: 20px;
  border: 1px solid #15202B;
  overflow: hidden;
  display: flex;
  flex-direction: column; 
  cursor: pointer;
  text-decoration: none !important;
  transition: 0.5s all;
  :hover{

    background-color: #1f97f2;
  }
`



export const Divbanner = styled.article`
  max-width:100%;

`

export const Banner = styled.img`
  max-width: 100%;
`

export const Title = styled.h1`
  color: #bddaf0;
  margin: 8px 10px 0;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.5s;
  
`

export const InformationsDiv = styled.article`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SectionDate = styled.div`
  display: flex;
  margin-left: 10px;
`
export const Date = styled.p`
  margin-left: 3px;
  margin-top:5px;
  font-size: 1rem;
  color: #bddaf0;
`

export const Tag = styled.h2`
  display: block;
  font-weight: bold;
  border-radius: 5px;
  padding: 0.2rem;
  color: #bddaf0;
  border: 1px solid #bddaf0;
  text-align: center;
  margin-right: 8px;
  align-self: flex-end;
  font-size: 1rem;
`