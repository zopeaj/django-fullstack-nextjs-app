import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StudentApp from "../views/main/App";

const MainApp = () => {
    return (
      <Wrapper>
        <StudentApp />
      </Wrapper>
    );
}

export default MainApp;


const Wrapper = styled.div`
 display:flex;
 height:100vh;
 width:100vw;
 bakcground-color:$0a0b0d;
 color:white;
`

const MainContainer = styled.div`
  flex:1;
`


