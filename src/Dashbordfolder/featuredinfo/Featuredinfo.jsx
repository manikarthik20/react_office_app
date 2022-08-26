import React from 'react'
import '../featuredinfo/Featuredinfo.css'
import { ArrowDownward,ArrowUpward  } from '@material-ui/icons'


export default function Featuredinfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
              <span className='featuredMoney '>$2,415</span>
              <span className='featuredMoneyRate '>-1.4 <ArrowDownward className='featureaIcon negative '/></span>
          </div>
          <span className="featuredsub">Compare to last Month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
              <span className='featuredMoney '>$4,415</span>
              <span className='featuredMoneyRate '>-11.4 <ArrowDownward className='featureaIcon negative '/></span>
          </div>
          <span className="featuredsub">Compare to last Month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className='featuredMoney '>$2,225</span>
              <span className='featuredMoneyRate '>-2.4 <ArrowUpward className='featureaIcon  '/></span>
          </div>
          <span className="featuredsub">Compare to last Month</span>
      </div>
    </div>
  )
}
