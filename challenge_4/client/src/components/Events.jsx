import React from 'react';

let Events = ({data}) => {
    return (
        <div>
            {data.map((event, index) => {
                if (event.date)
                let date = new Date(event.date);
                console.log(date, date.toString())
                if (index % 2 === 0) {
                    return (
                        <div key={index} id="event1">
                            <div id="details1"><b>Date: </b>{event.date}, <b>Place: </b>{event.category2}</div>
                            <div id="description1">{event.description}</div>
                        </div>
                    )
                } else {
                    return (
                        <div key={index} id="event2">
                            <div id="details2"><b>Date: </b>{event.date}, <b>Place: </b>{event.category2}</div>
                            <div id="description2">{event.description}</div>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default Events;