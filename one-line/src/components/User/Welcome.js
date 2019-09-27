import React, {useState} from 'react'
import styled from 'styled-components'
import { Alert } from 'reactstrap';

export default function Welcome(props) {

  const [visible, setVisibile] = useState(true)

  console.log('visible',visible)
    function myFunction() {
        setTimeout(function(){
             setVisibile(false); 
            }, 3000);
      }
    myFunction()  


    return (
        <>
           <Alert color="primary" isOpen={visible}>{props.welcome}</Alert>
        </>
    )
}


