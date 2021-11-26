import 'config/i18n';
import ReactDOM from 'react-dom';
import App from './App';
import './global.less';

export interface II18n {
  t: (t: string) => string;
}

ReactDOM.render(<App />, document.getElementById('root'));
