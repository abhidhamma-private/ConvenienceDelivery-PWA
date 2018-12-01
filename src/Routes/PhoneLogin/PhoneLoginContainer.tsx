import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneLoginPresenter from './PhoneLoginPresenter';

interface IState {
  phoneNumber: string;
}

class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    phoneNumber: '',
  };

  public render() {
    const { phoneNumber } = this.state;
    return (
      <PhoneLoginPresenter phoneNumber={phoneNumber} onSubmit={this.onSubmit} />
    );
  }

  public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    const { history } = this.props;
    event.preventDefault();
    const phoneNumber = this.state.phoneNumber;
    history.push({
      pathname: '/verify-phone',
      state: {
        phoneNumber,
      },
    });
  };
}

export default PhoneLoginContainer;
