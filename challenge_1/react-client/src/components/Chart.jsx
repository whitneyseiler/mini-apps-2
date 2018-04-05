import React from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.data;
        return (
            <div>
                <Line data={data} />
            </div>
        );
    }
}

export default Chart;