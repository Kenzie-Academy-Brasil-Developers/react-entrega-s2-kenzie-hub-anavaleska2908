import { Button } from "../Button";
import { Container, Content, Header } from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { FormLabel } from "@chakra-ui/react";

export const ModalRegister = ( { showModal, setShowModal } ) => {
   
  const openModal = () => {
    setShowModal(previousValue => !previousValue)
  }

  const schema = yup.object().shape( {
    name: yup.string().required( 'Campo obrigatório!' ),
  })
  
  const { register, handleSubmit, formState: { isDirty, errors } } = useForm( {
    resolver: yupResolver(schema)
  } )

  

  return (

      <Container>
      <Header>
        <h3>Cadastrar Tecnologia</h3>
        <Button onClick={openModal}><AiOutlineClose /></Button>
      </Header>
      <Content>
        <form>
          <label htmlFor="tittle">Nome da tecnologia:</label>
        <input
          name='title'
          { ...register( 'title' ) }
          label='Nome'
          placeholder='Digite aqui sua tecnologia'
          error={errors.name?.message}
          
          />
          <label htmlFor="status">Selecionar seu status:</label>
        <select label='Selecionar status' name='status' error={ errors.status?.message }>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
          <Button disabled={ !isDirty }>Cadastrar Tecnologia</Button>
        </form>
      </Content>
      </Container>

  )
}
