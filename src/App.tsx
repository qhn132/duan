import { Provider } from 'react-redux';
import store from './sagas/store';
import Page from './pages';

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};
export default App;
