import { Container, Line, Circle } from './style.js'

export const Pendulum = ({ animation }) => {

   return (
      <Container animation={animation}>
         <Line />
         <Circle />
      </Container>
   )
}