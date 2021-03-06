import { Button } from "../Button";
import { Container, Content, Header } from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useState } from "react";
import { Card } from '../Card'

export const ModalUpdate = ( { tech, setTech, openModalUpdate, setOpenModalUpdate, id, title, status } ) => {
  // const [value, setValue] = useState([])

  
  const [token] = useState( JSON.parse( localStorage.getItem( '@KenzieHub:token' ) ) || '' )
  
  const openModal = () => {
    setOpenModalUpdate(previousValue => !previousValue)
  }

  const schema = yup.object().shape( {
    status: yup.string().required('Campo obrigatório'),
  })
  
  const { register, setValue, handleSubmit, formState: { isDirty, errors } } = useForm( {
    mode: 'onChange',
    resolver: yupResolver(schema)
  } )

  const updateTech = (data) => { 
  console.log(data)
    api.put( `/users/techs/${id}`, data,{      
      headers: {
        Authorization: `Bearer ${token}`
      }, 
    } )
      .then( _ => {
        toast.success( 'Tecnologia Atualizada com sucesso!' )
        openModal()
      } )
      .catch( error => toast.error( 'Tecnologia não pode ser atualizada!' ) )
       
  }

  const deleteTech = () => {

    api.delete( `/users/techs/${id}`, {      
      headers: {
        Authorization: `Bearer ${token}`
      }, 
    } )
      .then( _ => {
        toast.success( 'Tecnologia excluída com sucesso!' )
        openModal()
      } )
      .catch(error => toast.error('Não foi possível excluir'))

  }

  

  return (
      <Container>
      <Header>
        <h3>Tecnologia Detalhes</h3>
        <Button onClick={openModal}><AiOutlineClose /></Button>
      </Header>
      <Content>
        <form onSubmit={handleSubmit(updateTech)}>
          <label htmlFor="tittle">Nome do projeto:</label>
        <input
          name='title'
          label='Nome' readOnly value={title}
          error={errors.name?.message} 
          
          />
          <label htmlFor="status">Selecionar seu status:</label>
          <select label='Selecionar status' name='status' { ...register( 'status' ) }
            error={ errors.status?.message }>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button type='submit' disabled={ !isDirty }>Salvar alterações</Button>
          <Button graySchema onClick={deleteTech}>Excluir</Button>
        </form>
      </Content>
      </Container>

  )
}
