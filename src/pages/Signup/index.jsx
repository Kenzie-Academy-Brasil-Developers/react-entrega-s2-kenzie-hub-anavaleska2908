import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
// import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { Container, Nav, Content } from './styles';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Redirect, useHistory } from 'react-router-dom';

export const Signup = ({ authenticated }) => {
  // const [ value, setValue ] = useState( 'default' );

  const schema = yup.object().shape( {
    name: yup.string().required( 'Campo obrigatório!' ),
    email: yup.string().email('Email inválido').required('Campo obrigatório!'),
    password: yup.string().min(8, 'Mínimo de 8 dígitos').required('Campo obrigatório!'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Senhas diferentes').required('Campo obrigatório!'),
    // select: yup.string().oneOf([yup.ref('Primeiro Módulo', 'Segundo Módulo', 'Terceiro Módulo', 'Quarto Módulo', 'Quinto Módulo', 'Sexto Módulo')]).required('Campo obrigatório!'),
  
  })

  const { register, handleSubmit, formState: { isDirty, errors } } = useForm( {
    resolver: yupResolver(schema)
  } )
  
  // const handleChange = (event) => setValue(event.target.value)
  const history = useHistory()

  const handleClickBack = () => {
    history.push('/')
  }

  const formSubmit = ( data ) => {
    const user = { 
      name: data.name,
      email: data.email,
      password: data.password,
      course_module: data.course_module,
      bio: "Lorem ipsum dolor emet",
      contact: "linkedin/in/johndoe",
     };
    api.post( '/users', user )
      .then( ( _ ) => {
        toast.success( 'Conta criada com sucesso!' );
        return history.push('/login')
      })
      .catch( ( error ) => toast.error('Falha ao criar a conta, tente outro email!') );
  }


  if ( authenticated ) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Container>
      <Nav>
        <h1>Kenzie Hub</h1>
        <Button onClick={handleClickBack}>Voltar</Button>
      </Nav>
      <Content>
        <form onSubmit={handleSubmit(formSubmit)}>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
          <Input
            register={ register }
            name='name'
            label='Nome'
            placeholder='Digite aqui seu nome'
            error={ errors.name?.message }
          />
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
          <Input
            register={ register }
            name='passwordConfirm'
            type='password'
            label='Confirmar Senha'
            placeholder='Digite novamente sua senha'
            error={errors.passwordConfirm?.message}
          />
          <Select
            register={ register }
            name='course_module'
            label='Selecionar módulo'
            error={ errors.course_module?.message }
            // onChange={() => handleChange}
          >
            <option value='default' disabled hidden>Escolha o seu módulo</option>
            <option value='Primeiro Módulo'>Primeiro Módulo</option>
            <option value='Segundo Módulo'>Segundo Módulo</option>
            <option value='Terceiro Módulo'>Terceiro Módulo</option>
            <option value='Quarto Módulo'>Quarto Módulo</option>
            <option value='Quinto Módulo'>Quinto Módulo</option>
            <option value='Sexto Módulo'>Sexto Módulo</option>
          </Select>
          <Button type='submit' disabled={!isDirty}>Cadastrar</Button> 
        </form>
      </Content>
    </Container>
  )
}