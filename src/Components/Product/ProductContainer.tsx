import React from 'react';
import { Query } from 'react-apollo';
import { PRODUCT_QUERY } from './ProductQuery';
import ProductPresenter from './ProductPresenter';

class ProductContainer extends React.Component {
  public render() {
    return (
      <Query query={PRODUCT_QUERY}>
        {({ data }) => <ProductPresenter data={data} />}
      </Query>
    );
  }
}

export default ProductContainer;
