import Helmet from 'react-helmet';
import React from 'react';
import styled from 'styled-components';
import withLayout from 'src/lib/withLayout';
import ProductItem from 'src/Components/ProductItem';
import { HOME_QUERY } from './HomeQueries';
import { Query } from 'react-apollo';

const Container = styled.div``;

const Product = styled.div`
  width: 100vw;
  height: 130vh;
  background: ${props => props.theme.greyColor};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
  grid-gap: 1vw;
`;

class HomePresenter extends React.Component<any, {}> {
  public render() {
    return (
      <Query query={HOME_QUERY}>
        {({ data }) => {
          // tslint:disable-next-line
          console.log(data);

          return (
            <Container>
              <Helmet>
                <title>GS25 배달서비스</title>
              </Helmet>
              <Product>
                {data &&
                  data.onSale &&
                  data.onSale.map(product => (
                    <ProductItem
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      subtitle={product.detail}
                      price={product.price}
                      photoUrl={product.photo.url}
                    />
                  ))}
              </Product>
            </Container>
          );
        }}
      </Query>
    );
  }
}
export default withLayout(HomePresenter);
