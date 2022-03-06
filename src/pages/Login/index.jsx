import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { Container, Nav, Content } from './styles';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Redirect, useHistory } from 'react-router-dom';

export const Login = ({ authenticated, setAuthenticated}) => {
  // const [ value, setValue ] = useState( 'default' );

  const schema = yup.object().shape( {
    email: yup.string().email('Email inválido').required('Campo obrigatório!'),
    password: yup.string().min(8, 'Mínimo de 8 dígitos').required('Campo obrigatório!'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm( {
    resolver: yupResolver(schema)
  } )
  
  const history = useHistory()

  const handleClick = () => {
    history.push('/signup')
  }

  const formSubmit = ( data ) => {
    api.post( '/sessions', data ).then( response => {
      const { token, user } = response.data;

      localStorage.setItem('@KenzieHub:token',  JSON.stringify(token));
      localStorage.setItem('@KenzieHub:user', JSON.stringify(user));
      
      setAuthenticated( true );

      return history.push( '/dashboard' );
    } ).catch( error => toast.error( 'Email ou senha inválidos' ) );
  }

  if ( authenticated ) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Container>
      <Nav>
        <h1>Kenzie Hub</h1>
      </Nav>
      <Content>
        <form onSubmit={handleSubmit(formSubmit)}>
          <h2>Login</h2>
          <Input
            register={ register }
            name='email'
            label='Email'
            placeholder='Digite aqui seu email'
            error={errors.email?.message}
          />
          <Input
            register={ register }
            name='password'
            type='password' label='Senha'
            placeholder='Digite aqui sua senha'
            error={errors.password?.message}
          />
          <Button type='submit'>Entrar</Button> 
          <p>Ainda não possui uma conta?</p>
          <Button onClick={handleClick} graySchema>Cadastrar</Button>
        </form>
      </Content>
    </Container>
  )
}