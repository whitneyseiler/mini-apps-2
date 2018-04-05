import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Chart from './components/Chart.jsx';
import SelectDates from './components/SelectDates.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      start: "2018-01-01",
      end: "2018-04-05"
    }
  }

  componentDidMount() {
    this.makeApiCall();
  }

  makeApiCall() {
    $.ajax({
      url: `https://api.coindesk.com/v1/bpi/historical/BTC.json?start=${this.state.start}&end=${this.state.end}`, 
      success: (data) => {
        this.populateData(JSON.parse(data));
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  populateData(data) {
    data = data.bpi
    let labels = [];
    let dataSet = [];

    let coinData = {
        labels: labels,
        datasets: [
            {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataSet
            }
        ]
    }
    for (var key in data) {
      labels.push(key);
      dataSet.push(data[key]);
    };

    this.setState({
        data: coinData,
    })
  }

  onDateSelect(event, start, end) {
    event.preventDefault();

    let startDate = document.getElementById("start").value;
    let endDate = document.getElementById("end").value;

    this.setState({
      start: startDate,
      end: endDate
    }, () => {
      this.makeApiCall();
    })
  }

  render () {
    return (<div>
      <h1>CryptoCurrency is a Scam</h1>
      <Chart data={this.state.data}/>
      <SelectDates onSelect={(event) => this.onDateSelect(event, start, end)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));