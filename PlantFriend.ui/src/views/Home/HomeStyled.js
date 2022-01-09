import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3%;
`;

const HomeButtonContainer = styled.div`
  width: 25%;
  padding-top: 10%;
`;

const HomeInfoContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const LoginContainer = styled.div`
  display: block;
  postion: absolute;
  top: 25%;
  left: 2%;
`;

const HomeTitle = styled.div`
  padding-bottom: 3%;
  font-size: 35px;
  font-weight: bold;
  color: #6a9669;
`;

const ProfileInfo = styled.h4`
  padding-bottom: 10px;
`;

export {
  HomeContainer,
  HomeButtonContainer,
  HomeTitle,
  LoginContainer,
  HomeInfoContainer,
  ProfileInfo
};
