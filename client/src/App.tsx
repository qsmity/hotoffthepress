import React, { useState } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { BrowserRouter } from 'react-router-dom'
import { SessionState } from './store/reducers/session'
import { ErrorState } from './store/reducers/error'
import Navbar from './components/Navbar';
import MainRoutes from './components/MainRoutes';
import Sidebar from './components/Sidebar';
import { saveState, loadState } from './store/localStorage'

const preloadedState = loadState()
const store = configureStore(preloadedState)

store.subscribe(()=> 
  saveState(store.getState())
)

export interface StoreState {
  session: SessionState;
  errors: ErrorState
}

const App: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawerState = (willOpen: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    // keep open if tab or shift for screen reading software
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    } else {
      setIsOpen(willOpen);
    }
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar toggleDrawerState={toggleDrawerState} />
        <Sidebar toggleDrawerState={toggleDrawerState} isOpen={isOpen}/>
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  );

}

export default App;
