import React from 'react'
// import styled from "styled-components";
import { Header, Statistic } from 'semantic-ui-react'

const dashboardData = {
    topCompanies: '35% of Black women work in Management, Business, Science & Arts',
    numberOfCompanies: '6,711',
    currentClimate: 'meh',
    topTags: 'microaggression',
    lostMoney: '$450 to $550 billion',
    numberOfJournals: '410,680',
    totalUsers: '9.8 million'
}

const HeaderExampleSubheaderProp = () => (
    <Header
    as='h2'
    color='violet' 
    textAlign='left'
    content='SafeSpace. Dashboard'
    subheader='Quick summarized figures'
  />
);

const StatisticNum = () => (
    <Statistic color='grey'>
      <Statistic.Value>6,711</Statistic.Value>
      <Statistic.Label>Total Companies</Statistic.Label>
    </Statistic>
)
const StatisticVal = () => (
    <Statistic size='tiny' color='grey'>
      <Statistic.Value>#microagression</Statistic.Value>
      <Statistic.Label>Top Tag</Statistic.Label>
    </Statistic>
)


export default function Dashboard() {
    return (
        <div style={{padding: '30px', backgroundColor: '#F4F4F4'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <HeaderExampleSubheaderProp />
            </div>
                <br/>
            <div className="divAround"> 
                <div className="mediumBox">
                    <div style={{padding: '2px'}}>
                        <p style={{fontSize: '20px', fontFamily: 'Poppins'}}>Top Companies</p>
                    </div>
                    <hr style={{margin: '5px 0px'}}/>
                    <div style={{display: 'flex', alignItems: 'center', fontFamily: 'Poppins', paddingLeft: '5px'}}>
                        <p style={{fontSize: '15px', marginBottom: '0px', letterSpacing: '1px', flex: '2', marginRight: '10px'}}>This percentage reflects  Black women primarily in Management, Business, Science & Arts</p>
                        <p style={{flex: '1', fontSize: '53px', alignContent: 'center'}}>35%</p>
                    </div>
                </div>

                <div className="mediumBox" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins', paddingLeft: '5px'}}>
                        <StatisticNum/>
                        <img style={{height: '90px'}} src='../footer/companies.svg'/>
                </div>

                <div className="mediumBox">
                    <div style={{padding: '2px'}}>
                        <p style={{fontSize: '20px', fontFamily: 'Poppins'}}>Lost Money</p>
                    </div>
                    <hr style={{margin: '5px 0px'}}/>
                    <div style={{display: 'flex', alignItems: 'center', fontFamily: 'Poppins', paddingLeft: '5px'}}>
                        <p style={{flex: '1', fontSize: '53px', alignContent: 'center', marginBottom: '0px'}}>$$$</p>
                        <p style={{fontSize: '23px', marginBottom: '0px', letterSpacing: '1px', flex: '2', marginLeft: '10px'}}>450 to 550 Billion
                        </p>
                    </div>
                </div>

                <div className="mediumBox" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins', paddingLeft: '5px'}}>
                        <StatisticVal/>
                </div>
            </div> 
        </div> 
    )
};