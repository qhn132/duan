import { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import LayoutBase from 'components/Layout';
import routes from '../routes';
import { createBrowserHistory } from 'history';
import { withTranslation } from 'react-i18next';

export interface IRoute {
  path: string;
  component: any;
  layout?: boolean;
  exact?: boolean;
}

const history = createBrowserHistory();

class Pages extends Component<{ t: any }> {
  render() {
    const { t } = this.props;
    return (
      <BrowserRouter>
        <HashRouter>
          <LayoutBase t={t} history={history}>
            <Switch>
              {routes.map((route: IRoute, index: number) => (
                <Route
                  path={route.path}
                  key={index.toString()}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </LayoutBase>
        </HashRouter>
      </BrowserRouter>
    );
  }
}

export default withTranslation()(Pages);
