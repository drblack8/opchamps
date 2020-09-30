import React from 'react';
import 'antd/dist/antd.css';
import { Card, Space } from 'antd';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'



const tabListNoTitle = [
  {
    key: 'LogIn',
    tab: 'Log In',
  },
  {
    key: 'SignUp',
    tab: 'Sign Up',
  },
];

const contentListNoTitle = {
  LogIn: <div className="formz"><Space align="center"><LoginPage /></Space></div>,
  SignUp: <div className="formz"><Space align="center"><SignupPage /></Space></div>,
};

class LogCard extends React.Component {
  state = {
    noTitleKey: 'LogIn',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <>
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          <div className="space-align-container">{contentListNoTitle[this.state.noTitleKey]}</div>
        </Card>
      </>
    );
  }
}

export default LogCard
