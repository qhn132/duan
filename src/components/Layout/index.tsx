import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import './styles.scss';

interface IProps {
  children: any;
  history: any;
  t: any;
}

export interface LayoutHandle {
  removeLayout: () => any;
  addLayout: () => any;
}

const layout: LayoutHandle = {
  removeLayout: function () {
    throw new Error('Function not implemented.');
  },
  addLayout: function () {
    throw new Error('Function not implemented.');
  },
};

interface IState {
  layout: boolean;
}

let setLayout: any = () => null;

class LayoutBase extends Component<IProps, IState> {
  static create: () => (Componet: any) => (props: any) => JSX.Element;
  constructor(props: IProps) {
    super(props);
    this.state = { layout: true };
    layout.removeLayout = this.handleRemoveLayout;
    layout.addLayout = this.handleAddLayout;
    setLayout(layout);
  }

  shouldComponentUpdate(nProps: IProps, nState: IState) {
    const { children } = this.props;
    const { layout } = this.state;
    return children !== nProps.children || layout !== nState.layout;
  }

  handleRemoveLayout = () => {
    const { layout } = this.state;
    if (layout) {
      this.setState({ layout: false });
    }
  };

  handleAddLayout = () => {
    const { layout } = this.state;
    if (!layout) {
      this.setState({ layout: true });
    }
  };

  render() {
    const { children } = this.props;
    const { layout } = this.state;
    return (
      <Layout className="layout">
        {layout ? <Header /> : null}
        <Content>
          <div style={{ padding: layout ? 16 : 0 }}>{children}</div>
        </Content>
        {layout ? <Footer /> : null}
      </Layout>
    );
  }
}

LayoutBase.create = () => {
  return (ComponetWrap) => (props) => <ComponetWrap layout={layout} {...props} />;
};

export default LayoutBase;
