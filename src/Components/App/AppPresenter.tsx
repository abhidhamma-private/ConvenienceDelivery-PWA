import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../Routes/Home';
import Login from '../../Routes/Login';
import PhoneLogin from '../../Routes/PhoneLogin';
import VerifyPhone from '../../Routes/VerifyPhone';
import Cart from '../../Routes/Cart';
import Hot from '../../Routes/Hot';
import New from '../../Routes/New';
import Tag from '../../Routes/Tag';
import Search from '../../Routes/Search';
interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/home'} exact={true} component={Home} />
    <Route path={'/login'} exact={true} component={Login} />
    <Route path={'/phone-login'} component={PhoneLogin} />
    <Route path={'/verify-phone'} component={VerifyPhone} />
    <Route path={'/cart'} component={Cart} />
    <Route path={'/hot'} exact={true} component={Hot} />
    <Route path={'/new'} exact={true} component={New} />
    <Route path={'/tag'} exact={true} component={Tag} />
    <Route path={'/search'} exact={true} component={Search} />
    <Redirect from={'*'} to={'/home'} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/'} exact={true} component={Home} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;
