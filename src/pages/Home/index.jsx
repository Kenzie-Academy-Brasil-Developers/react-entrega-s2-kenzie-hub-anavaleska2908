import { Redirect, useHistory } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Container, Content } from './styles'

export const Home = ({ authenticated }) => {

  const history = useHistory()

  const handleNavigation = ( path ) => {
    return history.push( path );
  }


  if ( authenticated ) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Container>
      <Content>
        <h1>Kenzie Hub</h1>
         <span>Hub de portfólios de programadores da Kenzie Academy Brasil.</span>
        <div>
          <Button  onClick={() => handleNavigation('/signup')} graySchema>Cadastre-se</Button>
          <Button onClick={() => handleNavigation('/login')}>Login</Button>
        </div>
      </Content>
        
    </Container>
 
  )
}