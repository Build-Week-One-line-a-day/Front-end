import React from 'react'
import DatePickerComponent from './DatePickerComponent';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import TenYearImg from '../../img/TenYear.svg';
import BeachImg from '../../img/Beach.svg';
import SunglassesImg from '../../img/Sunglasses.svg';


export default function TenYear() {
    return (
        <ContainerDiv>
            <div className ="header-and-back">
                <h1>One Line A Day Journal</h1>
                <NavLink to='/recent'><button>Back</button></NavLink>
            </div>

            <img width={650} src={TenYearImg} />
            
            <div className="title-date-entry">
                <div className="title-and-date">
                    <h1>Ten Year Page</h1>
                    <DatePickerComponent />
                </div>
                
                <div className="entry-content">
                    <div className="single-entry">
                        
                        <button>2019</button>
                    
                        <div className="text">
                            <h2>Entry Title</h2>
                            <p>Lorem ipsum dolor amet wolf ramps unicorn, gluten-free four loko everyday carry waistcoat biodiesel meggings drinking vinegar lo-fi slow-carb chia lyft flannel. Bicycle rights everyday carry tattooed, banjo chambray cred street art gluten-free tilde you probably haven't heard of them hammock. Hot chicken prism crucifix farm-to-table shaman tattooed. Copper mug art party +1 lo-fi tbh microdosing.</p>
                        </div>
                    </div>

                    <div className="single-entry">
                        <button>2018</button>
                        <div className="text">
                            <h2>Entry Title</h2>
                            <p>Entry content for each year.</p>
                        </div>
                    </div>

                    <div className="single-entry">
                        <button>2017</button>
                        <div className="text">
                            <h2>Entry Title</h2>
                            <p>Entry content for each year.</p>
                        </div>
                    </div>


                    <div className="single-entry">
                        <button>2016</button>
                        <div className="text">
                            <h2>Entry Title</h2>
                            <p>Entry content for each year.</p>
                        </div>
                    </div>

                    <div className="single-entry">
                        <button>2015</button>
                        <div className="text">
                            <h2>Entry Title</h2>
                            <p>Entry content for each year.</p>
                        </div>
                    </div>

                    <div className="single-entry">
                        <button>2014</button>
                        <div className="text">
                            <h2>Entry Title</h2>
                            <p>Entry content for each year.</p>
                        </div>
                    </div>

                    <div className="single-entry">
                        <button>2013</button>
                        <div className="text">
                            <h2>Entry Title</h2>
                            <p>Entry content for each year.</p>
                        </div>
                    </div>
                

                
                    <div className="single-entry">
                        <button>2012</button>
                        <div className="text">
                            <h2>Entry Title</h2>
                            <p>Entry content for each year.</p>
                        </div>
                    </div>

                    <div className="single-entry">
                        <button>2011</button>
                        <div className="text">
                            <h2>Entry Title</h2>
                            <p>Entry content for each year.</p>
                        </div>
                    </div>

                    <div className="single-entry">
                    <button>2010</button>
                    <div className="text">
                        <h2>Entry Title</h2>
                        <p>Entry content for each year.</p>
                    </div>
                </div>
            
                </div>
            </div>

            {/* <img width={650} src={BeachImg} />
            
            <img width={650} src={SunglassesImg} />
            <img  />         */}
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
        margin-top: 10px;
        
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
            grid-template-columns: 1fr;
            width: 90%;
            margin-left: 107px;
            margin: 0 auto;

            .single-entry {
                display: grid;
                grid-template-columns: 85px 1fr;
                text-align: left;




                // display: flex;
                // align-items: center;
                width: 68%;
                background-color: #fff;
                margin-bottom: 25px;
                padding: 15px;
                // border: 5px solid #3F3D56;
                // border-radius: 40px;
                flex-direction: column;
                margin-right: 21px;

                border: .5px solid darkgray;
                border-radius: 5px;

                button {
                    color: #fff;
                    background: #47CBE6;
                    padding: 6px 6px;
                    cursor: pointer;
                    border: 0 none;
                    border-radius: 3px;
                    text-transform: uppercase;
                    font-weight: bold;
                    height: 30px;
                    width: 65%;
                    font-size: 1rem;
                    margin-top: 10px;
                }

                .text {
                    // padding-left: 3%;
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

           

     
`;