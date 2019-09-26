import React from 'react'

export default function Welcome(props) {

    function myFunction() {
        setTimeout(function(){
             props.setWelcome('') 
            }, 5000);
      }
    myFunction()  


    return (
        <>
          <h1>{props.welcome}</h1>  
        </>
    )
}
