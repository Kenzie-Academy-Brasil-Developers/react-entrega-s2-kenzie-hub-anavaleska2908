import { Container, InputContainer } from './styles'
export const Input = ( { label, register, name, error, icon: Icon, ...rest } ) => {
  return (
    <Container>
      <div>{ label } { !!error && <span> - { error }</span> }</div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  )
}