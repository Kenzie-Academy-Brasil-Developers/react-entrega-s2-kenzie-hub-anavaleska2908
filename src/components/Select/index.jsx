import { Container, SelectContainer } from './styles'
export const Select = ( { register, name, label, error, ...rest } ) => {
  return (
    <Container>
      <div>{ label } { !!error && <span> - { error }</span> }</div>
      <SelectContainer isErrored={!!error}>
        <select {...register(name)} { ...rest }></select>
      </SelectContainer>
    </Container>
  )
}