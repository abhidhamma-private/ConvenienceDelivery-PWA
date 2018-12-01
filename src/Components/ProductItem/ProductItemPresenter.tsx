import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 3px solid #e9e9e9;
  box-shadow: none;
  background: #ffffff;
  padding: 10px;
  > {
    display: grid;
    align-self: center;
  }
  &:hover {
    border: 3px solid ${props => props.theme.boldCyanColor};
    color: ${props => props.theme.boldCyanColor};
    font-weight: bold;
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
class ProductItemPresenter extends React.Component<any, any, any> {
  public render() {
    return (
      <Container key={this.props.key}>
        <ThumbnailWraper>
          <Thumbnail src={this.props.photoUrl} />
        </ThumbnailWraper>
        {this.props.name} {this.props.price}원
      </Container>
    );
  }
}
export default ProductItemPresenter;
