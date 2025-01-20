import Header from '../../layout/header'
import React from 'react'
import ImmediateAttentionPanel from './immidiateAttentionpanel'
import Keymetrics from './keymetrics'
import InsightCard from './insights'

const Dashboardpages = () => {
  return (
    <div>
      <Header/>
      <div className='mt-10'>
        <ImmediateAttentionPanel/>
      </div>
      <div>
        <Keymetrics/>
      </div>
      <div>
        <InsightCard/>
      </div>
    </div>
  )
}

export default Dashboardpages