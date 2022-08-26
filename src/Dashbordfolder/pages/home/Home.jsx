import React from 'react'
import Chart from '../../charts/Chart'
import Featuredinfo from '../../featuredinfo/Featuredinfo'
import '../home/Home.css'
import { userData } from '../../DummyData'
import WidgetsLg from '../../WidgetsLg/WidgetsLg'
import WidgetsSm from '../../WidgetsSm/WidgetsSm'

 function Home() {
  return (
    <div className='home'>
    <Featuredinfo/>
    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className='homeWidgets'>
      <WidgetsSm/>
      <WidgetsLg/>
    </div>
    </div>
  )
}
export default Home;
