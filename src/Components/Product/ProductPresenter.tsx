import React from 'react';
import Helmet from 'react-helmet';
import ProductItem from '../ProductItem';
import styled from 'styled-components';

const Container = styled.div``;

const Product = styled.div`
  width: 100vw;
  height: 130vh;
  background: ${props => props.theme.greyColor};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
  grid-gap: 1vw;
`;

class ProductPresenter extends React.Component<any, any, any> {
  public render() {
    const data = this.props.data;
    return (
      <Container>
        <Helmet>
          <title>GS25 배달서비스</title>
        </Helmet>
        <Product>
          {data &&
            data.onSale &&
            data.onSale.map(singleProductData => (
              <ProductItem data={singleProductData} />
            ))}
        </Product>
      </Container>
    );
  }
}

export default ProductPresenter;
