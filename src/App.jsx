import './App.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from './Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div id="wrapper">
      <Provider store={store}>
        <Router />
      </Provider>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
