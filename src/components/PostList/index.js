import React from 'react'

import * as S from './styled'


const PostList = ({children}) => {

  return(
    <S.Container>
      <S.PostList>
      {children}
      </S.PostList>
    </S.Container>
  )
}


export default PostList