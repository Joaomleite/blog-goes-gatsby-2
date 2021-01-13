import React from 'react'



import * as S from './styled'
import Img1 from '../../images/129747.jpg'

import {Calendar} from '@styled-icons/boxicons-regular/Calendar'



const PostCard = (props) => {

 return(
    <>
      <S.Card to={props.link}>
        <S.Divbanner>
          <S.Banner src={props.img}/>
        </S.Divbanner>
        <S.Title>{props.title}</S.Title>
        <S.InformationsDiv>
          <S.SectionDate>
            <Calendar size={25} color='#bddaf0'/>
            <S.Date>{props.date}</S.Date>
          </S.SectionDate>
          
          <S.Tag>{props.category}</S.Tag>
        </S.InformationsDiv>
      </S.Card>
    </>
  )

}



export default PostCard