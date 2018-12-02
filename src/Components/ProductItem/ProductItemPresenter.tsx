import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import QuantityInput from '../QuantityInput';

const Container = styled.div`
  border: 3px solid #e9e9e9;
  box-shadow: none;
  background: #ffffff;
  display: grid;
  grid-template-rows: 70% 10% 20%;
  grid-template-columns: 100%;
  > * {
    display: grid;
    justify-content: center;
  }
  &:hover {
    border: 3px solid ${props => props.theme.boldCyanColor};

    > :nth-child(2) {
      color: ${props => props.theme.boldCyanColor};
      font-weight: bold;
    }
  }
`;
const ThumbnailWraper = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  display: block;
`;
const Thumbnail = styled.img`
  -o-object-fit: cover;
  object-fit: contain;
  display: block;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Info = styled.div``;
const Order = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  > * {
    display: grid;
    align-self: center;
    text-align-last: center;
    margin: 10px;
  }
`;
class ProductItemPresenter extends React.Component<any, any, any> {
  public render() {
    return (
      <Container key={this.props.key}>
        <ThumbnailWraper>
          <Thumbnail src={this.props.photoUrl} />
        </ThumbnailWraper>
        <Info>
          {this.props.name} {this.props.price}원
        </Info>
        <Order>
          <Button onClick={this.props.toggleCart} value={'담기'} />
          <QuantityInput />
        </Order>
      </Container>
    );
  }
}
export default ProductItemPresenter;
