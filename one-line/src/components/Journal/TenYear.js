import React from 'react'
import DatePickerComponent from './DatePickerComponent';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';

export default function TenYear() {
    return (
        <ContainerDiv>
            <h1>One Line A Day Journal</h1>
            <NavLink to='/recent'><button>Back</button></NavLink>
            <div>
                <h1>Ten Year Page</h1>
                <DatePickerComponent />
            </div>
            
            <div className="entry-content">
                <div className="single-entry">
                    <button>19'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>

                <div className="single-entry">
                    <button>18'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>

                <div className="single-entry">
                    <button>17'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>

                <div className="single-entry">
                    <button>16'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>

                <div className="single-entry">
                    <button>15'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>

                <div className="single-entry">
                    <button>14'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>

                <div className="single-entry">
                    <button>13'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>

                <div className="single-entry">
                    <button>12'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>

                <div className="single-entry">
                    <button>11'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>

                <div className="single-entry">
                    <button>10'</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>
            </div>
            
        </ContainerDiv>
    )
}



const ContainerDiv = styled.div`
    font-family: 'Amatic SC', cursive;

    h1 {
        font-size: 3rem;
    }

    .entry-content {
        
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            width: 40%;
            height: 40px;
            font-size: 1.5rem;
            border-radius: 25px;
        }
        
        .single-entry {
            display: flex;
            align-items: center;
            width: 50%;
            background-color: #47CBE6;
            margin-bottom: 25px;
            padding: 15px;
            border: 5px solid black;
            border-radius: 110px;

            button {

            }

            .text {
                padding-left: 3%;
                width: 100%;
                
                h2 {
                    font-size: 2.5rem;
                    margin-bottom: 0px;
                }

                p {
                    font-family: 'Poiret One', cursive;
                    font-weight: 600;
                    font-size: 1.2rem;
                }
            }
        }
    }
    
`;