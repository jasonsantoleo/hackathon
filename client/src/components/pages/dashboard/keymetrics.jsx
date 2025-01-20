
import Metriccard from '../../common/Dashboard/metriccard'
import React from 'react'

const dummyData = {
    todayRevenue: 15780,
    yesterdayRevenue: 14500,
    weekRevenue: 98450,
    lastWeekRevenue: 89600,
    activeOrders: new Array(23), // Simulating 23 active orders
    urgentOrders: new Array(5),  // Simulating 5 urgent orders
    todayCustomers: 342,
    averageCustomers: 315
  };

const Keymetrics = () => {
    const calculateTrend=(current,previous)=>{
        return current>previous ? 'up' : 'down'
    }
  return (
    <div className='grid grid-cols-4 gap-4 m-4'>
        <Metriccard
            title="Today's Sales"
            value={dummyData.todayRevenue}
            comparison={dummyData.yesterdayRevenue}
            trend={calculateTrend(dummyData.todayRevenue,dummyData.yesterdayRevenue)}
        />
        <Metriccard
            title="This Week"
            value={dummyData.todayRevenue}
            comparison={dummyData.yesterdayRevenue}
            trend={calculateTrend(dummyData.todayRevenue,dummyData.yesterdayRevenue)}
        />
        <Metriccard
            title="Pending Orders"
            value={dummyData.todayRevenue}
            comparison={dummyData.yesterdayRevenue}
            trend={calculateTrend(dummyData.todayRevenue,dummyData.yesterdayRevenue)}
        />
        <Metriccard
            title="Today's Customers"
            value={15000}
            comparison={15500}
            trend="up"
        />
    </div>
  )
}

export default Keymetrics