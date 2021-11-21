import React from 'react'
import styled from "styled-components";
import HeaderOnly from '../layouts/HeaderOnly';

const dashboardData = {
    topCompanies: '35% of Black women work in Management, Business, Science & Arts',
    numberOfCompanies: '6,711',
    currentClimate: 'meh',
    topTags: 'microaggression',
    lostMoney: '$450 to $550 billion',
    numberOfJournals: '410,680',
    totalUsers: '9.8 million'
}

const Borders = styled.div`
    border: 1px solid lightgray;
    border-radius: 20px;
    padding: 20px;
    height: 100vh;
    
    .boxes {
        color: white;
        height: 150px;
        width: 160px;
        border-radius: 20px;
        text-align: center;
        margin-bottom: -15px;
        filter: drop-shadow(1px 1px 3px gray);
    }

    .box1 {
        border: 1px solid blue;
        background-color: blue;
    }

    .box2 {
        border: 1px solid orange;
        background-color: orange;
    }
    
    .box3 {
        border: 1px solid red;
        background-color: red;   
    }

    .box4 {
        border: 1px solid green;
        background-color: green;   
    }
    
    .mediumBox {
        background-color: purple;
        // border: 1px solid purple;
        height: 120px;
        color: white;
        width: 330px;
        border-radius: 20px;
        text-align: center;
        margin-bottom: -15px;
        background-position: center; 
        filter: drop-shadow(1px 1px 3px gray);
    }
    
    .longBox {
        // background-color: black;
        border: 1px solid black;
        height: 200px;
        width: 330px;
        color: white;
        border-radius: 20px;
        text-align: center;
        margin-bottom: -15px;
        background-image: url(https://www.americangeosciences.org/sites/default/files/styles/ci__650_x_430_/public/CI-fireworks-Carlson-084-600-400px-160701.jpg?itok=GJWsYK5S);
        filter: drop-shadow(1px 1px 3px gray);
    }

    h3 {
        text-align: center;
    }

    span {
        justify-content: space-between;
    }

    @media only screen and (min-width: 420px) {
        .boxes {
            color: white;
            height: 150px;
            width: 180px;
            border-radius: 20px;
            text-align: center;
            margin-bottom: -15px;
            filter: drop-shadow(1px 1px 3px gray);
        }

        .mediumBox {
            background-color: purple;
            // border: 1px solid purple;
            color: white;
            height: 180px;
            width: 370px;
            border-radius: 20px;
            text-align: center;
            margin-bottom: -15px;
            background-position: center; 
            filter: drop-shadow(1px 1px 3px gray);
        }
        
        .longBox {
            // background-color: black;
            border: 1px solid black;
            height: 200px;
            width: 370px;
            color: white;
            border-radius: 20px;
            text-align: center;
            margin-bottom: -15px;
            background-image: url(https://www.americangeosciences.org/sites/default/files/styles/ci__650_x_430_/public/CI-fireworks-Carlson-084-600-400px-160701.jpg?itok=GJWsYK5S);
            filter: drop-shadow(1px 1px 3px gray);
        }


    }
`

export default function Dashboard() {
    return (
        
        <HeaderOnly>
                <Borders>
                <span className='d-flex'>
                    <h3>Dashboard</h3>
                    <p>Sun, 11 / 21 / 2021</p>
                </span>

                <span className='d-flex'>
                    <div className="boxes box1">A</div>
                    <div className="boxes box2">B</div>
                </span>

                <br/>
                
                <span className='d-flex'>
                    <div className="boxes box3">C</div>
                    <div className="boxes box4">D</div>
                </span>

                <br/>

                <span className='d-flex'>
                    <div className="longBox">E</div>
                </span>
                
                <br/>
                
                <span className='d-flex'>
                    <div className="mediumBox">F</div>
                </span>

                </Borders>
        </HeaderOnly>
        
    )
};


