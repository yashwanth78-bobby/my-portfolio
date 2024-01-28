import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer } from './AccomplismentsStyle'
import AccomplishmentsCard from '../Cards/AccomplishmentsCard'
import { accomplishments } from '../../data/constants'


const Accomplishments = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="Accomplishments">
      <Wrapper>
        <Title>Accomplishments</Title>
        <Desc>
        Here are some of my notable accomplishments in Programming and Web development
        </Desc>
        <CardContainer>
          {toggle === 'all' && accomplishments
            .map((accomplishment) => (
              <AccomplishmentsCard accomplishment={accomplishment} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {accomplishments
            .filter((item) => item.category == toggle)
            .map((accomplishment) => (
              <AccomplishmentsCard accomplishment={accomplishment} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Accomplishments