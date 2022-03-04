import { Container } from "./styles"

export const Card = ({title, status}) => {
  return (
    <Container>
      <h3>{ title }</h3>
      <p>{ status }</p>
    </Container>
  )
}

