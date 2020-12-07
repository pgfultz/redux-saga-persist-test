import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Header from './components/Header';
import store, { persistor } from './store';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} className="toast-container" />
      </PersistGate>
    </Provider>
  );
}

export default App;
