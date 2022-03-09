import React from 'react'
import { useForm } from 'react-hook-form'

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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Login-image" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" {...register('email')} />

          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register('password')}
          />

          <Button type="submit">Sign In</Button>
        </form>

        <SignInLink>
          Não possui conta? <a>Sign Up</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
