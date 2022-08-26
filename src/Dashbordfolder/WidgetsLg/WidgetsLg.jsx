import React from 'react'
import '../WidgetsLg/WidgetsLg.css'


export default function WidgetsLg() {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">
        Latest Transanctions
      </h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/originals/c1/9b/d3/c19bd384a798d6b3fad780b0966e6d7e.jpg" alt="widgetLgImg" className="widgetLgImg" />
            <span className="widgetLgName">Amer</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/originals/c1/9b/d3/c19bd384a798d6b3fad780b0966e6d7e.jpg" alt="widgetLgImg" className="widgetLgImg" />
            <span className="widgetLgName">Amer</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/originals/c1/9b/d3/c19bd384a798d6b3fad780b0966e6d7e.jpg" alt="widgetLgImg" className="widgetLgImg" />
            <span className="widgetLgName">Amer</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pendding" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className="widgetLgUser">
            <img src="https://i.pinimg.com/originals/c1/9b/d3/c19bd384a798d6b3fad780b0966e6d7e.jpg" alt="widgetLgImg" className="widgetLgImg" />
            <span className="widgetLgName">Amer</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}
