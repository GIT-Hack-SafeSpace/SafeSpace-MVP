import React from 'react'
import { Statistic } from 'semantic-ui-react';
import MediumBox from './MediumBox';

export default function StatText({ tag }) {
  return (
    <MediumBox>
    <Statistic size='tiny' color='grey'>
      <Statistic.Value>#{tag}</Statistic.Value>
      <Statistic.Label>Top Tag</Statistic.Label>
    </Statistic>
  </MediumBox>
  )
}
