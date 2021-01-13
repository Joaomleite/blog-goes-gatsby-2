import styled from 'styled-components'
import {Link} from 'gatsby'
import media from "styled-media-query"



export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 4.2rem; 
  background-color: #15202B;
  margin-bottom: 20px;
`

export const ContainerNav = styled.div` 
  display:flex;
  max-width: 1250px;
  margin: 0 auto;
  flex-wrap: wrap;
  ${media.lessThan("medium")`
    display: grid;
    grid-template-columns: 2fr 1fr; 

  `}
`

export const MenuIcon = styled.div`
  display: none;

  ${media.lessThan("medium")`
    display: block;
    justify-self: end;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  `}
  
`

export const Title = styled.h1`
  font-size: 1.5em;
  color: #ffff;
  font-weight: 800;
  line-height:4rem;
  ${media.lessThan("medium")`
    font-size: 1.2em;
    margin-left: 0.5rem;
    grid-column: span 2;
  `}
`
export const Ul = styled.ul`
  flex: 1;
  display:flex;
  justify-content: flex-end;

  ${media.lessThan("medium")`
    flex-direction: column;
    margin-top:0.2rem;
    grid-column: span 2;
  `}
`

export const liMobile =styled.li`

  display: none;
  text-decoration:none;
  font-size: 1.2rem;
  overflow: hidden;
  height: ${props => props.items ? '4rem' : '0rem' };
  transition: all 0.5s;
  line-height: 4rem;
  color:#15202B;
  text-align: center;
  background-color: #fff;
  ${media.lessThan("medium")`
    display: block;
  `}
`

export const li =  styled.li`
  text-decoration:none;
  display:inline-block;
  font-size: 1rem;
  color: #ffff !important;
  cursor: pointer;
  line-height: 4rem;
  padding: 0 20px;

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const LinkSection = styled(Link)`

  text-decoration: none !important;

  .animation-link::after{
    content: '';
    display: block;
    width: 0%;
    height: 3px;
    background: #fff;
    transition: width .3s;
}

.animation-link:hover::after{
    width: 100%;
    transition: .3s;
}

`