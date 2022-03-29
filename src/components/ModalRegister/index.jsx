import { Button } from "../Button";
import { Container, Content, Header } from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useState } from "react";

export const ModalRegister = ( { showModal, setShowModal } ) => {
  // const [value, setValue] = useState([])
  const [ newTech, setNewTech ] = useState( [] )
  
  const [token] = useState( JSON.parse( localStorage.getItem( '@KenzieHub:token' ) ) || '' )
  
  const openModal = () => {
    setShowModal(previousValue => !previousValue)
  }

  const schema = yup.object().shape( {
    title: yup.string().required( 'Campo obrigatório!' ),
    status: yup.string().required('Campo obrigatório'),
  })
  
  const { register, setValue, handleSubmit, formState: { isDirty, errors } } = useForm( {
    mode: 'onChange',
    resolver: yupResolver(schema)
  } )

  const addTechs = (data) => {
 

    api.post( '/users/techs', data,{      
      headers: {
        Authorization: `Bearer ${token}`
      }, 
    } )
      .then( _ => {
        setNewTech( [ ...newTech, data ] )
        toast.success( 'Tecnologia Cadastrada com sucesso!' )
        openModal()
      } )
      .catch(error => toast.error('Tecnologia já cadastrada anteriormente!'))
  }
  console.log(token)  

  return (

      <Container>
      <Header>
        <h3>Cadastrar Tecnologia</h3>
        <Button onClick={openModal}><AiOutlineClose /></Button>
      </Header>
      <Content>
        <form onSubmit={handleSubmit(addTechs)}>
          <label htmlFor="tittle">Nome da tecnologia:</label>
        <input
          name='title'
          { ...register( 'title' ) }
          label='Nome'
          placeholder='Digite aqui sua tecnologia'
          error={errors.name?.message} 
          
          />
          <label htmlFor="status">Selecionar seu status:</label>
          <select label='Selecionar status' name='status' { ...register( 'status' ) }
            error={ errors.status?.message }>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button type='submit' disabled={ !isDirty }>Cadastrar Tecnologia</Button>
        </form>
      </Content>
      </Container>

  )
}
