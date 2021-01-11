import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { BrowserRouter } from 'react-router-dom'
import { SessionState } from './store/reducers/session'
import { ErrorState } from './store/reducers/error'
import Navbar from './components/Navbar';
import MainRoutes from './components/MainRoutes';

const store = configureStore()

export interface StoreState {
  session: SessionState;
  error: ErrorState
}

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
        <Navbar/>
        <MainRoutes/>
      </BrowserRouter>
    </Provider>
  );
  
}

export default App;
