import React from 'react';
import ProductItemPresenter from './ProductItemPresenter';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART } from '../Product/ProductQuery';

class ProductItemContainer extends React.Component<any, any, any> {
  public render() {
    const data = this.props.data;
    return (
      <Mutation mutation={TOGGLE_CART} variables={{ id: data.id }}>
        {toggleCart => (
          <ProductItemPresenter
            key={data.name}
            id={data.id}
            name={data.name}
            subtitle={data.detail}
            price={data.price}
            photoUrl={data.photo.url}
            toggleCart={toggleCart}
          />
        )}
      </Mutation>
    );
  }
}
export default ProductItemContainer;
