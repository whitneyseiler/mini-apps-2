import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './styles/style.css';
import store from './store.js';
import { addTestState } from './actions/board-actions';
import BoardContainer from './components/containers/BoardContainer';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Minesweeper</h1>
          </header>
          <BoardContainer store={store} />
        </div>
      );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
registerServiceWorker();
