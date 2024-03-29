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
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(25vw, 1fr));
  grid-gap: 1vw;
`;

class ProductPresenter extends React.Component<any, any, any> {
  public render() {
    const data = this.props.data;
    const category = this.props.category;
    return (
      <Container>
        <Helmet>
          <title>GS25 배달서비스</title>
        </Helmet>
        <Product>
          {data &&
            data[category] &&
            data[category].map(categoryData => (
              <ProductItem data={categoryData} />
            ))}
        </Product>
      </Container>
    );
  }
}

export default ProductPresenter;
