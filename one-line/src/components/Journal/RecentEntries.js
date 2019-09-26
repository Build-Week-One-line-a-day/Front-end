import React, {useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import notesImage from '../../img/yellowNotes.svg'
import Entry from './Entry'

export default function RecentEntries(props) {
    console.log('recent entries props', props)
   

    useEffect(()=>{
        // console.log('recent entries props', props)
        // Make a request for a user with a given ID
        axios.get(`https://bw-one-line-a-day.herokuapp.com/api/users/${props.id}/posts`)
        .then(function (response) {
        // handle success
        console.log(response.data);
        props.setEntries(response.data)
    })
        .catch(function (error) {
        // handle error
        console.log(error);
    })
    return () => {
        console.log('clean up')
    }
    },[])

    return (
        <>
            <ContainerDiv>
                <h1><span className="yellow">One Line A Day</span><span className="blue"> Journal</span></h1>
                <img alt='notes' src={notesImage} />
                <div className="btn-row">
                <h1>Recent Entries</h1>
                    <NavLink to='/create'><button>Add New</button></NavLink>
                    <NavLink to='/full' >
                        <button>Ten Year View</button>
                    </NavLink>
                </div>
            
                
                
            </ContainerDiv>

            <PostContainer>
                {props.entries.map((entry, index) =>{
                return <Entry {...props} setEntries={props.setEntries} entries={props.entries} entry={entry} index={index} key={index}/>
                })}
            </PostContainer>
        </>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    // styles below add pink background, 
    // yellow border, and curved bottom edge
    
    background: #cf0732;
    background-image: url(https://www.transparenttextures.com/patterns/notebook.png);
    border-bottom-left-radius: 55rem;
    border-bottom-right-radius: 55rem;
    border-bottom: 2px solid #edc71c;
    width: 100%;


    @media only screen and (max-width: 600px) {
        padding: 0 .5rem;
      }

    img{
        margin: 0 auto;
        width: 150px;
        padding: 2rem;
    }
    h1{
        font-family: 'Amatic SC',cursive;
        font-size: 3rem;
        margin-bottom: 0;
        .yellow{
            color: #ebbd36
        }
        .blue{
            color: #47cbe6;
        }
    }

    .btn-row {
        width: 45%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            color: #fff;
            background-color: #47CBE6;
            padding: 12px 12px;
            cursor: pointer;
            border: 0 none;
            border-radius: 4px;
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: 800;
            

            @media only screen and (max-width: 600px) {
                margin-left: 0px;
              }
        }
        button:hover{
            transition: all 150ms linear;
            opacity: .85;
        }

        h1{
            font-size: 2em;
            font-family: 'Amatic SC',cursive;
        }
    }
`


// splitting the two containers allows the entries to
// display on the grey background and not on the pink
// background and also prevents the pink background from
// stretching longer and longer for each new post that is
// added to the list

const PostContainer = styled.div`
    width: 75%;
    margin: 0 auto;
`