'use strict';
import React, { Component } from 'react';

function Month(props) {
    return (<header>
                <h6 className="month">{props.Month}</h6>
                <a className="calendar-btn-prev fontawesome-angle-left" href="#"></a>
                <a className="calendar-btn-next fontawesome-angle-right" href="#"></a>
            </header>)
}

function Week(props) {
    return (<thead>
                <tr>
                    <td>San</td>
                    <td>Mon</td>
                    <td>Tue</td>
                    <td>Wed</td>
                    <td>Thu</td>
                    <td>Fri</td>
                    <td>Sat</td> 
                </tr>
            </thead>)
}

function Days(props) {
	const first = props.first.map((day, index) => <td key={index} date-month="12" date-day={day}>{day}</td>);
	const second = props.second.map((day, index) => <td key={index} date-month="12" date-day={day}>{day}</td>);
	const third = props.third.map((day, index) => <td key={index} date-month="12" date-day={day}>{day}</td>);
	const forth = props.forth.map((day, index) => <td key={index} date-month="12" date-day={day}>{day}</td>);
	return (<tbody>
                <tr>
                    {first}
                </tr>
                <tr>
					{second}
                </tr>
                <tr>
					{third}
                </tr>
                <tr>
                   {forth}
                </tr>
            </tbody>)
}

const first = [1, 2, 3, 4, 5, 6, 7]
const second = [8, 9, 10, 11, 12, 13, 14]
const third = [15, 16, 17, 18, 19, 20, 21]
const forth = [22, 23, 24, 25, 26, 27, 28]
class Calendar extends Component {
  render() {
    return (
        <div className="ui-block">
            <div className="calendar-container">
                <div className="calendar">
                    <Month month="April"/>
					<table>
						<Week />
						<Days first="[1,2,3,4,5,6]" first={first} second={second} third={third} forth={forth}/>
					</table>
                    
                </div>
			</div>
        </div>
    );
  }
}


export default Calendar;