import React from 'react';
import {Line} from 'react-chartjs-2';

let SelectDate = ({event, start, end, onSelect}) => {
    return (
        <div>
            <h3>Select New Date Range</h3>
            <form id="date-select">
                Start:
                <input type="date" id="start" />
                End:
                <input type="date" id="end" />
                <input type="submit" onClick={(event) => onSelect(event, start, end)}/>
            </form>
        </div>
    );
}

export default SelectDate;