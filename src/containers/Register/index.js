import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import registerImage from '../../assets/registerImage.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

const schema = Yup.object().shape({
  name: Yup.string('O seu nome é obrigatório').required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 dígitos'),
  confirmPassword: Yup.string()
    .required('A senha é obrigatória')
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
})

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
  }

  return (
    <Container>
      <RegisterImage src={registerImage} alt="registerImage" />
      <ContainerItens>
        <img src={Logo} alt="Logo" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            error={errors.name?.message}
            type="text"
            placeholder="Nome"
            {...register('name')}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            error={errors.email?.message}
            type="email"
            placeholder="Email"
            {...register('email')}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Password</Label>
          <Input
            error={errors.password?.message}
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            error={errors.confirmPassword?.message}
            type="password"
            placeholder="Confirme a senha"
            {...register('confirmPassword')}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button
            error={errors.password?.message}
            type="submit"
            style={{ marginTop: '17px', marginBottom: '0px' }}
          >
            Sign Up
          </Button>
        </form>

        <SignInLink>
          Já possui conta? <a>Sign In</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
