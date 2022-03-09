import React from 'react'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

export default function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="Login-image" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Password</Label>
        <Input />

        <Button>Sign In</Button>

        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
