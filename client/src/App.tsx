import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore()

const App: React.FC = () => {
  const [data, setData] = React.useState(null);

  // const getData = () => {
  //   fetch('/api')
  //     .then((result) => result.text())
  //     .then((res) => setData(res));
  // };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <h1>hello world</h1>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
