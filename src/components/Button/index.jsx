import { Container } from './styles';

export const Button = ({ children, graySchema = false, ...rest}) => {
  return (
    <Container graySchema={graySchema}  type='button' {...rest}>
      { children }
    </Container>
  )
}