import { useEffect, useState } from "react"
import { Container } from "./styles"
import {ModalUpdate} from '../ModalUpdate'

export const Card = ( { newTech } ) => {
const [openModalUpdate, setOpenModalUpdate] = useState(false)
  const handleClickModal = () => {
    setOpenModalUpdate(previousValue => !previousValue)
  }
  
  return (
          <>
          <Container onClick={handleClickModal} >
          
                <h3>{ newTech.title }</h3>
                <p>{ newTech.status }</p>
          </Container>
             { openModalUpdate && 
              <ModalUpdate
                openModalUpdate={ openModalUpdate } setOpenModalUpdate={ setOpenModalUpdate }
                id={ newTech.id }
                title={ newTech.title }
                status={ newTech.status } >
            
            </ModalUpdate>  
            }
          </>
        )
}

