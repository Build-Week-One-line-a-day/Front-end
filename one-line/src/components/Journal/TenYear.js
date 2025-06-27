import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import TenYearImg from '../../img/yellowCalendar.svg';
import Entry from './Entry';

export default function TenYear({ entries = [], setEntries, ...rest }) {
  const [masterEntries, setMasterEntries] = useState([]);

  useEffect(() => {
    const user = {
      id: 17,
      title: 'next week',
      contents: 'seed text',
      user_id: 7,
      created_at: '2016-09-26 02:42:57',
      updated_at: '2017-09-26 02:45:57'
    };

    setMasterEntries([user, ...entries]);
  }, [entries]);

  function tenYearFormat(event) {
    const dateInput = event.target.value;
    if (!dateInput || !masterEntries.length) return;

    const [pickedYear, pickedMonth, pickedDay] = dateInput.split('-');
    const monthDayPicked = `${pickedMonth}-${pickedDay}`;
    const yearThreshold = parseInt(pickedYear, 10) - 10;

    const filtered = masterEntries.filter((entry) => {
      const [entryDate] = entry.created_at?.split(' ') || [];
      const [entryYear, entryMonth, entryDay] = entryDate.split('-');
      const monthDayEntry = `${entryMonth}-${entryDay}`;
      return monthDayEntry === monthDayPicked && parseInt(entryYear, 10) >= yearThreshold;
    });

    setEntries(filtered);
  }

  return (
    <>
      <ContainerDiv>
        <h1>
          <span className="yellow">One Line A Day</span>
          <span className="blue"> Journal</span>
        </h1>
        <img src={TenYearImg} alt="tenyearimg" />
        <div className="btn-row">
          <h1>
            <span className="yellow">Ten Year</span>{' '}
            <span className="blue">Page</span>
          </h1>
          <input onChange={tenYearFormat} type="date" />
          <NavLink to="/recent">
            <button>Back</button>
          </NavLink>
        </div>
      </ContainerDiv>

      <PostContainer>
        {entries.map((entry, index) => (
          <Entry
            {...rest}
            key={entry.id || index}
            setEntries={setEntries}
            entries={entries}
            entry={entry}
            index={index}
          />
        ))}
      </PostContainer>
    </>
  );
}

TenYear.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEntries: PropTypes.func.isRequired
};



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
        font-size: 5rem;
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

        @media only screen and (max-width: 600px) {
            flex-direction: column;

            button {
                margin-top: 10px;
            }
        }

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
            font-size: 3em;
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