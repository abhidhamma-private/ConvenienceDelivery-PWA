import React from 'react';
import Helmet from 'react-helmet';
import Input from '../../Components/Input';
import styled from '../../typed-components';
import Tab from 'src/Components/Tab';

const Container = styled.div``;

const Form = styled.form`
  padding: 0px 40px;
`;
const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 40px;
`;
const ExtendedInput = styled(Input)`
  margin-bottom: 20px;
`;
const Button = styled.button`
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  background-color: ${props => props.theme.cyanColor};
  color: white;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
`;
const VerifyPhonePresenter = () => (
  <Container>
    <Helmet>
      <title>Verify Phone | Number</title>
    </Helmet>
    <Tab backTo={'/phone-login'} title={'인증번호 입력'} />
    <Title>인증번호를 입력해주세요</Title>
    <Form>
      <ExtendedInput value={''} placeholder={'인증번호 입력'} onChange={null} />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={'white'}>
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </Button>
    </Form>
  </Container>
);

export default VerifyPhonePresenter;
