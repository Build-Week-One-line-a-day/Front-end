import React from 'react'
import DatePickerComponent from './DatePickerComponent';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import TenYearImg from '../../img/TenYear.svg';

export default function TenYear() {
    return (
        <ContainerDiv>
            <div className ="header-and-back">
                <h1>One Line A Day Journal</h1>
                <NavLink to='/recent'>
                    <button>Back</button>
                </NavLink>
            </div>

            <img width={650} src={TenYearImg} />
            
            <div className="title-date-entry">
                <div className="title-and-date">
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

                </div>

                <div className="entry-content-two">
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
                </div>

                <div className="entry-content-three"> 
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
            </div>
        </ContainerDiv>
    )
}



const ContainerDiv = styled.div`
    font-family: 'Amatic SC',cursive;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .header-and-back {
        margin: 0 auto;
        
        h1 {
            
            font-size: 3rem;
        }

        a {
            button {
                
            }
        }
    }

    img {

    }

    .title-date-entry {
        position: absolute;
        top: 20%;
        left: 2%;
        width: 70%;
        
        .title-and-date {
            display: flex;
            flex-direction: row;

            .react-datepicker-wrapper {
                padding-left: 30px;
                margin-top: 34px;
            }
        }

        .entry-content {
            display: grid;
            flex-direction: column;
            align-items: center;
            grid-template-columns: 1fr 1fr 1fr;
            width: 65%;
            margin-left: 107px;

            .single-entry {
                display: flex;
                align-items: center;
                width: 68%;
                background-color: #47CBE6;
                margin-bottom: 25px;
                padding: 15px;
                border: 5px solid #3F3D56;
                border-radius: 40px;
                flex-direction: column;
                margin-right: 21px;

                button {
                    width: 40%;
                    height: 40px;
                    font-size: 1.5rem;
                    border-radius: 25px;

                }

                .text {
                    padding-left: 3%;
                    width: 100%;

                    h2 {
                        font-size: 2.5rem;
                        margin-bottom: 0px;
                        margin-top: 0px;
                    }

                    p {
                        font-family: 'Poiret One',cursive;
                        font-weight: 600;
                        font-size: 1.2rem;
                        margin-top: 9px;
                    }
                }
            }

            
        }

        .entry-content-two {
            display: grid;
            flex-direction: row;
            align-items: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            width: 88%;

            .single-entry {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 70%;
                background-color: #47CBE6;
                margin-bottom: 25px;
                padding: 15px;
                border: 5px solid #3F3D56;
                border-radius: 40px;

                button {
                    width: 40%;
                    height: 40px;
                    font-size: 1.5rem;
                    border-radius: 25px;

                }

                .text {
                    padding-left: 3%;
                    width: 100%;

                    h2 {
                        font-size: 2.5rem;
                        margin-bottom: 0px;
                        margin-top: 0px;
                    }

                    p {
                        font-family: 'Poiret One', cursive;
                        font-weight: 600;
                        font-size: 1.2rem;
                        margin-top: 8px;
                    }
                }
            }

        }   

     .entry-content-three {
                display: grid;
                flex-direction: row;
                align-items: center;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                width: 88%;
                margin-left: 107px;
    
                .single-entry {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 70%;
                    background-color: #47CBE6;
                    margin-bottom: 25px;
                    padding: 15px;
                    border: 5px solid #3F3D56;
                    border-radius: 40px;
    
                    button {
                        width: 40%;
                        height: 40px;
                        font-size: 1.5rem;
                        border-radius: 25px;
    
                    }
    
                    .text {
                        padding-left: 3%;
                        width: 100%;
    
                        h2 {
                            font-size: 2.5rem;
                            margin-bottom: 0px;
                            margin-top: 0px;
                        }
    
                        p {
                            font-family: 'Poiret One', cursive;
                            font-weight: 600;
                            font-size: 1.2rem;
                            margin-top: 8px;
                        }
                    }
                } 
`;