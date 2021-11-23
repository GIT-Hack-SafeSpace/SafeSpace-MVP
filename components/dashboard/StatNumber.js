import React from 'react'
import { Statistic } from 'semantic-ui-react';
import MediumBox from './MediumBox';

export default function StatNumber({ object }) {
  return (
    <MediumBox>
    <Statistic color='grey'>
      <Statistic.Value>{object.value}</Statistic.Value>
      <Statistic.Label>{object.subheading}</Statistic.Label>
    </Statistic>
    <img style={{ height: '90px' }} src={object.image} />
  </MediumBox>
  )
}
