import React from 'react';
import withLayout from 'src/lib/withLayout';
import Product from 'src/Components/Product';

class HomePresenter extends React.Component<any, {}> {
  public render() {
    return <Product />;
  }
}
export default withLayout(HomePresenter);
