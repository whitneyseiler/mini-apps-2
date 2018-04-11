import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';
import EndPage from './EndPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      f1: true,
      f2: false,
      f3: false,
      f4: false,
      currentForm: null,
    }
  }

  componentDidMount() {
    this.getCurrentForm();
    // this.makeApiCall();
  }

  makeApiCall() {
    // $.ajax({
    //   url: '', 
    //   success: (data) => {
    //     console.log(data)
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  onSubmit(event) {
    event.preventDefault();

    let current = this.state.currentForm;
    let next = current.slice(0,1) + (Number(current.slice(1)) + 1)

    var form = document.getElementsByClassName(current);

    for (var i = 0; i < form.length; ++i) {
      let field = form[i].id;
      let value = form[i].value;
      this.setState({
        [field]: value
      });
    }

    if (current !== 'f4') {
      this.setState({
        [current]: false,
        currentForm: next,
      }, () => {
        this.renderForm()
      })
    } 
  }

  getCurrentForm() {
    for (var key in this.state) {
      if (this.state[key] === true) {
        this.setState({
          currentForm: key
        })
      }
    }
  }

  renderForm() {
    if (this.state.currentForm === 'f1') {
      return( <FormOne onSubmit={(event) => this.onSubmit(event)} /> );
    } 
    else if (this.state.currentForm === 'f2') {
      return( <FormTwo onSubmit={(event) => this.onSubmit(event)} /> );
    }
    else if (this.state.currentForm === 'f3') {
      return( <FormThree onSubmit={(event) => this.onSubmit(event)} /> );
    }
    else if (this.state.currentForm === 'f4') {
      return( <EndPage /> );
    }
  }

  render () {
    return (
      <div>
        <h1>Multi-Step Checkout</h1>
        {this.renderForm()}
      </div>
    )
  }
}

export default App;