import React from 'react'
import styled from 'styled-components'

export default function RoomList(props) {  
  
  return (
    <Container>
      <Title>{props.props.title}</Title>
      <RoomGrid>
        {props.props.elements.map((room) => (
          <Card key={room.id}>
            <CardHeader>
              <CardTitle>
                <span>{room.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Price>{room.price.toLocaleString()} / éj</Price>
              <Description>{room.description.description}</Description>
              <AdditionalInfo>
                {props.props.subtext}
              </AdditionalInfo>
              <Icons>
              {room.icon.map((el, i) => {
                return (
                  <img src={el.url} key={i} />
                )
              })}
              </Icons>
            </CardContent>
          </Card>
        ))}
      </RoomGrid>
      <Footer>
        {props.props.footer.footer}
      </Footer>
    </Container>
  )
}

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const CardHeader = styled.div`
  padding: 1rem;
  background-color: #f1f1f1;
`

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const Icons = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 1rem;
  img {
    max-width: 50px;
    padding: 6px;
    border: 1px solid grey;
    border-radius: 4px;
  }
`

export const Description = styled.p`
  margin-bottom: 1rem;
`

export const AdditionalInfo = styled.p`
  font-size: 0.775rem;
  color: #718096;
`

export const Footer = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: #718096;
`