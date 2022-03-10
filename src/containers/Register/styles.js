import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  height: 80%;
`
export const ContainerItens = styled.div`
  padding: 45px;
  height: 80%;
  background: #373737;
  border-radius: 0 10px 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 80px;
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
    text-align: center;
  }
`
export const Label = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${props => (props.error ? '1px' : '10px')};
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 35vw;
  padding: 9px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-align: center;
  margin-top: 15px;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 3px;
`
