import React, {useState} from 'react'


import {Menu} from '@styled-icons/boxicons-regular/Menu'
import * as S from './styled'



const Nav = () =>{

  const [menuItens, setMenuItens] = useState(false)
  
  const MenuItensAppear= () => {
  
    if(menuItens == false){
      setMenuItens(true);
    } else{

      setMenuItens(false);
    }
  }

  return(
    <S.Nav>
    <S.ContainerNav>
      <S.LinkSection to='/'>
        <S.Title>
        
          Rodrigo Goes Blog
        
        </S.Title>
      </S.LinkSection>

      <S.MenuIcon>
        <Menu size={50} color='#fff' onClick={MenuItensAppear}/>
      </S.MenuIcon>
      
      <S.Ul>
        <S.LinkSection to='/'>

          <S.liMobile items={menuItens}>
            Home
          </S.liMobile>
          
          <S.li className='animation-link'>
              Home
          </S.li> 
        </S.LinkSection>
        <S.LinkSection to='/podcast'>

          <S.liMobile items={menuItens}>
            Podcast
          </S.liMobile>

          <S.li className='animation-link'>
            
              Podcast
                
          </S.li>
        </S.LinkSection> 
        <S.LinkSection to='https://orodrigogoes.com.br/'>

          <S.liMobile items={menuItens}>
              Sobre Mim
          </S.liMobile>
          
          <S.li className='animation-link'>
            Sobre mim
          </S.li>
        </S.LinkSection>  
        
      </S.Ul>
    </S.ContainerNav>
    
  </S.Nav>
  )
}


export default Nav

