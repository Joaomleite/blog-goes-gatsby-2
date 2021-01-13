import React from 'react'


import * as S from './styled'

import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {Youtube} from '@styled-icons/boxicons-logos/Youtube'
import {FacebookSquare} from '@styled-icons/boxicons-logos/FacebookSquare'

const SocialMedia = { 
 instagram:'https://www.instagram.com/goesrodrigo/',
 youtube:'https://www.youtube.com/channel/UC1pvng_HOjxVIE-YL69reiw',
 facebook:'https://www.facebook.com/Rodrigo-Goes-451733022345103'
}


const Footer = () => (
  <>
    <S.Footer>
      <S.h1>Rodrigo Goes</S.h1>
      <S.IconsSection>
        <S.SocialLinks href={SocialMedia.instagram} target="_blank">
          <Instagram size={20} color='#fff'/>
        </S.SocialLinks>
        <S.SocialLinks href={SocialMedia.youtube} target="_blank">
          <Youtube size={20} color='#fff'/>
        </S.SocialLinks>
        <S.SocialLinks href={SocialMedia.facebook} target="_blank">
          <FacebookSquare size={20} color='#fff'/>
        </S.SocialLinks>
      </S.IconsSection>
      
      <S.h2>© 2021 copyright all right reserved.</S.h2>

    </S.Footer>
  </>

)


export default Footer