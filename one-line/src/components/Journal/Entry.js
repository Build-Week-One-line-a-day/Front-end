import React from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
// import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import Trash from '../../img/trash.svg'

export default function Entry(props) {
    console.log("entry props", props)
    const index = props.index;
    
    

    const deletePost = () => {
        // Make a request for a user with a given ID
        axiosWithAuth().delete(`/users/posts/${props.entry.id}`)
        .then(function (response) {
        // handle success
        
        const updatedEntries = props.entries.filter((entry) => entry.id !== props.entry.id)
        props.setEntries(updatedEntries)
        console.log(response);
        props.history.push('/recent')
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }

    const longDate = props.entry.created_at.split(" ")
    const shortDate = longDate[0];
    const monthDay = shortDate.split("-")
    const newDate = monthDay[1] + "-" + monthDay[2] + "-" + monthDay[0]
    

    return (
        <>
        <Card >
            <div className="row">
            <div className="col-sm-3 text-left">
                <Button >{newDate}</Button>
                
                <div className="editAndDelete">
                    <NavLink to={{pathname: `/edit/${props.entry.id}`, state: {title: props.entry.title, contents: props.entry.contents, created_at: props.entry.created_at} }} >
                        <Button>edit</Button>
                    </NavLink>    
                        
                    <Button onClick={deletePost}><img width={20} src={Trash} alt="trash can" /></Button>
                </div>
            </div>
            
            <CardBody className="col-sm-9 text-left">
                
                <CardTitle>{props.entry.title}</CardTitle>
             
                <CardText>{props.entry.contents}</CardText>
                
                
            </CardBody>
            </div>
        </Card>    
        </>
    )
}

// const ContainerDiv = styled.div`
//     display: flex;
//     justify-content: space-around;
//     border: .5px solid darkgray;
//     margin: 7.5px auto;
//     padding-right: 2.5%;
//     border-radius: 5px;
//     width: 75%;

//     @media only screen and (max-width: 600px) {
//         width: 95%;
//         margin: 0 auto;
//         margin-bottom: 15px;
//       }
    

//     a button{
//         color: #fff;
//         background: #47CBE6;
//         padding: 6px 6px;
//         cursor: pointer;
//         border: 0 none;
//         border-radius: 3px;
//         text-transform: uppercase;
//         font-weight: bold;
//         height: 30px;
//         width: 100%;
//         font-size: .9rem;
//         margin-top: 20px;
//         margin-left: 20%;
//     }
//     a button:hover{
//         transition: all 150ms linear;
//         opacity: .85;
//     }

//     .text-content {
//         text-align: left;
//         margin-left: 4%;

//         @media only screen and (max-width: 600px) {
//             margin-left: 7%;
//           }

//         .text-content-title{
//             display: flex;
//             justify-content: flex-start;
//             align-content: center;
//             button{
//                 color: #fff;
//                 background: #cf0732;
//                 padding: 6px 6px;
//                 cursor: pointer;
//                 border: 0 none;
//                 border-radius: 3px;
//                 text-transform: uppercase;
//                 font-weight: bold;
//                 height: 30px;
//                 width: 100%;
//                 font-size: .9rem;
//                 margin-top: 20px;
//                 margin-left: 20%;
//             } 
//             a button:hover{
//                 transition: all 150ms linear;
//                 opacity: .85;
//             }
//         }   
//     }


//     h2 {
//         font-family: 'Amatic SC',cursive;
//         font-size: 2rem;
//         margin-top: 15px;
//     }

//     p {
//         font-family: 'Poiret One',cursive;
//         font-weight: 600;
//     }
   
// `
