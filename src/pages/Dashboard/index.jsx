import { ModalRegister } from "../../components/ModalRegister"
import { Button } from '../../components/Button'
import { Container, Nav, Header, Content, DivTitle, ContentTechs, DivModal, HeaderModal, DivTech } from './styles'
import { useEffect, useState } from "react"
import { Redirect, useHistory } from 'react-router-dom';
import { ImPlus } from 'react-icons/im';
import { AiOutlineClose } from "react-icons/ai";
import { Card } from "../../components/Card";


export const Dashboard = ( { authenticated } ) => {
  const [ showModal, setShowModal ] = useState( false )
  const [renderCard, setRenderCard] = useState(false)
  const [ newTech, setNewTech] = useState([])
  
  const openModal = () => {
    setShowModal(previousValue => !previousValue)
  }
  
  const history = useHistory()

  const handleClickBack = () => {
    history.push('/login')
  }

  const [user] = useState(JSON.parse( localStorage.getItem( '@KenzieHub:user' ) ) || '')
      
  if ( !authenticated ) {
    return <Redirect to='login' />
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
      { renderCard && <DivTech> <Card /> </DivTech> }
    </Container>
  )
}