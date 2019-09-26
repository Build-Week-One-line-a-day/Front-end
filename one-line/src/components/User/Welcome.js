import React from 'react'
import styled from 'styled-components'

export default function Welcome(props) {

    function myFunction() {
        setTimeout(function(){
             props.setWelcome('') 
            }, 5000);
      }
    myFunction()  


    return (
        <ContainerDiv>
          <h1>{props.welcome}</h1>  
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
position: absolute !important;
margin: 0;
 h1{
   background: #fff;
   border-radius: 5px;
   width: 100vw;   
   padding: 5px;
   margin: 0 auto;
 }
`
