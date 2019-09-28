import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TenYearImg from '../../img/yellowCalendar.svg';
import Entry from './Entry';


export default function TenYear(props) {
    console.log('Ten Year Props', props)
    
    const [date, setDate] = useState('');
    // const [entries, setEntries] = useState([])
    const [masterEntries, setMasterEntries] = useState();

    // let masterEntries;

    useEffect(() => {
        const user = {
                "id": 17,
                "title": "next week",
                "contents": "seed text",
                "user_id": 7,
                "created_at": "2016-09-26 02:42:57",
                "updated_at": "2017-09-26 02:45:57"
        }

        // figure out how to hard code multiple objects for testing
        // ask back end to seed this data for testing

        // [
        //     {
        //         "id": 17,
        //         "title": "next week",
        //         "contents": "seed text",
        //         "user_id": 7,
        //         "created_at": "2017-09-26 02:42:57",
        //         "updated_at": "2017-09-26 02:45:57"
        //     },
        //     {
        //         "id": 18,
        //         "title": "next week",
        //         "contents": "seed text",
        //         "user_id": 7,
        //         "created_at": "2017-09-26 02:42:57",
        //         "updated_at": "2017-09-26 02:45:57"
        //     }
        // ]



        setMasterEntries([...props.entries, user])
        console.log('masterEntries', masterEntries)
    }, [])

    function tenYearFormat(event){
        console.log('second master entries', masterEntries)
        const tenYearEntries = masterEntries.filter((entry) => {
            let formattedDate = entry.created_at.split(" ")
            let splitYearMonthDay = formattedDate[0].split("-")
            // step 1 pull out month and day of the entry

            let MonthAndDay = splitYearMonthDay[1] + '-' + splitYearMonthDay[2]

            // step 1.5 pull out year entry 

            let year = splitYearMonthDay[0]

            // step 2 pull out the month and day of date picked

            let datePicked = event.target.value.split("-")
            let MonthAndDayDatePicked = datePicked[1] + "-" + datePicked[2]

            // step 3 pull out year of date picked

            let yearDatePicked = datePicked[0]

            // step 4 subtract year of date picked by 10

            yearDatePicked -= 10

            // step 5 month and day of entry == month and day of date picked
            return MonthAndDay == MonthAndDayDatePicked && year >= yearDatePicked


            // step 6 year of entry >= year from step 4
            // return back into the tenYearEntries
            console.log('formatted date', formattedDate)
            // return formattedDate[0] == event.target.value 
        })
       props.setEntries(tenYearEntries) 
    }

    
    return (
        <>
            <ContainerDiv>
                <h1><span className="yellow">One Line A Day</span><span className="blue"> Journal</span></h1>
                <img src={TenYearImg} alt='tenyearimg' />
                <div className="btn-row">
                    <h1><span class="yellow">Ten Year</span> <span class="blue">Page</span></h1>
                    {/* <DatePickerComponent /> */}
                    <input onChange={tenYearFormat} type={"date"}/>
                    <NavLink to='/recent'>
                        <button>Back</button>
                    </NavLink>
                </div>

            </ContainerDiv>

            <PostContainer>
                {props.entries.map((entry, index) =>{
                    return <Entry {...props} setEntries={props.setEntries} entries={props.entries} entry={entry} index={index} key={index} />
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
        width: 35%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        .yellow{
            color: #ebbd36
        }
        .blue{
            color: #47cbe6;
        }
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
    width: 60%;
    margin: 0 auto;
    margin-top: 1rem;

    @media only screen and (max-width: 600px) {
        width: 90%;
      }
`