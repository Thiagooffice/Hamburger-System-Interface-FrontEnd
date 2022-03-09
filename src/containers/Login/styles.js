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
export const LoginImage = styled.img`
  height: 70%;
`
export const ContainerItens = styled.div`
  padding: 45px;
  height: 70%;
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
    margin-top: 2vh;
    height: 85px;
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
  margin-top: 12px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 35vw;
  padding: 9px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
`
export const Button = styled.button`
  padding: 9px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-top: 55px;
  margin-bottom: 25px;
  color: #eeeeee;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
export const SignInLink = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`
