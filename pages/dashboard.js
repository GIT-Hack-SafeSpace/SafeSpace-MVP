import router from 'next/router';
import React, { useState } from 'react';
import { Button, Header } from 'semantic-ui-react';
import StatDetails from '../components/dashboard/StatDetails';
import StatNumber from '../components/dashboard/StatNumber';
import StatText from '../components/dashboard/StatText';
import { dashboard } from '../data/dashboard';
// import { supabase } from '../utils/client'; // will use when able to pull from database

export default function Dashboard() {
  const { stateOfUs, users, companies, industry, revenue, topTag } = dashboard;

  return (
    <div
      style={{
        padding: '30px',
        backgroundColor: '#F4F4F4',
        minHeight: '1200px',
      }}
    >
      <Button onClick={() => router.push('/')}>{'< Back'}</Button>
      <Header
        as='h2'
        color='violet'
        textAlign='center'
        content='SafeSpace. Impact'
        subheader='Quick summarized figures'
      />
      <div className='divAround'>
        <StatDetails object={stateOfUs} />
        <StatNumber object={users} />
        <StatDetails object={revenue} />
        <StatText tag={topTag} />
        <StatDetails object={industry} />
        <StatNumber object={companies} />
      </div>
    </div>
  );
}
