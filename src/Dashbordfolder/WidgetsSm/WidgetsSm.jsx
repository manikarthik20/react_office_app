import React from 'react'
import '../WidgetsSm/WidgetsSm.css'
import { Visibility } from '@material-ui/icons'

export default function WidgetsSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className='widgetSmList'>
            <li className='WidgetSmListItem'>
                <img src='http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg' alt='' className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Durga Prasad</span>
                    <span className="widgetSmUserTitle">SoftWare Engineer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                Display
                </button>
            </li>
            <li className='WidgetSmListItem'>
                <img src='http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg' alt='' className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Durga Prasad</span>
                    <span className="widgetSmUserTitle">SoftWare Engineer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                Display
                </button>
            </li>
            <li className='WidgetSmListItem'>
                <img src='http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg' alt='' className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Durga Prasad</span>
                    <span className="widgetSmUserTitle">SoftWare Engineer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                Display
                </button>
            </li>
            <li className='WidgetSmListItem'>
                <img src='http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg' alt='' className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Durga Prasad</span>
                    <span className="widgetSmUserTitle">SoftWare Engineer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                Display
                </button>
            </li>
        </ul>
        
    </div>
  )
}
