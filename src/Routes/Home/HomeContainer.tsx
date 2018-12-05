import React from 'react';
import { Query } from 'react-apollo';
import HomePresenter from './HomePresenter';
import { PRODUCT_QUERY } from 'src/Components/Product/ProductQuery';
import withLayout from 'src/lib/withLayout';

class HomeContainer extends React.Component<any, any, any> {
  public render() {
    return (
      <Query query={PRODUCT_QUERY}>
        {({ data }) => (
          <HomePresenter data={data} category={this.props.category} />
        )}
      </Query>
    );
  }
}

export default withLayout(HomeContainer);
