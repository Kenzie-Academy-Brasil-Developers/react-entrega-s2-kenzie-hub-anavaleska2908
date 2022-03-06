import { ModalRegister } from "../../components/ModalRegister"
import { Button } from '../../components/Button'
import { Container, Nav, Header, Content, DivTitle, ContentTechs, DivModal, HeaderModal, DivTech } from './styles'
import { useEffect, useState } from "react"
import { Redirect, useHistory } from 'react-router-dom';
import { ImPlus } from 'react-icons/im';
import { AiOutlineClose } from "react-icons/ai";
import { Card } from "../../components/Card";
import { api } from "../../services/api";


export const Dashboard = ( { newTech, setNewTech, authenticated, setAuthenticated } ) => {
  const [ showModal, setShowModal ] = useState( false )
  const [ tech, setTech ] = useState( [] )
  
  
  const openModal = () => {
    setShowModal(previousValue => !previousValue)
  }

  const handleClickBack = () => {
    localStorage.clear()
    setAuthenticated(false)
    
  }

  const [token] = useState( JSON.parse( localStorage.getItem( '@KenzieHub:token' ) ) || '' )
  const [ user ] = useState( JSON.parse( localStorage.getItem( '@KenzieHub:user' ) ) || '' )
  
  useEffect( () => {
    api.get( `/users/${ user.id }`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    } ).then( response => {
     setTech(response.data.techs)
    })
  }, [tech])
      
  if ( !authenticated ) {
    return <Redirect to='/login' />
  }

  return (
    <Container>
      <Nav>
        <h1>Kenzie Hub</h1>
        <Button onClick={ handleClickBack }>Sair</Button>
      </Nav>
      <hr />
      <Header>
        <h2> Olá, { user.name }</h2>
        <p>{ user.course_module }</p>
      </Header>
      <hr />
      <Content>
        <DivTitle>
          <h2>Tecnologias</h2>
          <Button onClick={ openModal }><ImPlus /></Button>
          
        </DivTitle>
        <DivModal>
          { showModal && 
            <ModalRegister showModal={ showModal } setShowModal={ setShowModal }>
            </ModalRegister>  
          }
        </DivModal>
      </Content>
      <DivTech>
        {tech.map(newTech => <Card key={newTech.id} newTech={ newTech } />)}
      </DivTech>
    </Container>
  )
}