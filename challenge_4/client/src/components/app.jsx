import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';

import Events from './Events.jsx';
import Search from './Search.jsx';
window.React = React;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      events: [],
      limit: 10,
      pageCount: 0,
      currentPage: 1,
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getEvents();
    this.getPageCount();
  }

  getEvents() {
    $.ajax({
        url      : `http://localhost:3000/events?_page=${this.state.currentPage}&_limit=10`,
        dataType : 'json',
        type     : 'GET',
  
        success: data => {
          this.setState({
            data: data,
          });
        },
  
        error: (err) => {
          console.error(err);
        }
      });
  }

  getPageCount() {
    $.ajax({
      url      : 'http://localhost:3000/events',
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({
          pageCount: data.length / 10
        });
      },

      error: (err) => {
        console.error(err);
      }
    });
  }

  handleSearch(event) {
    event.preventDefault();
    let input = document.getElementsByClassName("search");
    let query = input[0].value;
    $.ajax({
      url      : `http://localhost:3000/events?q=${query}`,
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({
          data: data,
        });
      },

      error: (err) => {
        console.error(err);
      }
    });
  }

  handlePageClick(event) {
    this.setState({
      currentPage: event.selected + 1
    }, () => {
      this.getEvents();
    })
  };

  render () {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Search handleSearch={(event) => {this.handleSearch(event)}}/>
        <div id="events-container">
          <Events data={this.state.data}/>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={<a href="">...</a>}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={10}
            onPageChange={(event) => {this.handlePageClick(event)}}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} 
          /><br /><br /><br /><br />
        </div>
      </div>
    )
  }
}

export default App;