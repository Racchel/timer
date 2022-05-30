import { Timer } from './components'
import styled from 'styled-components'

/** */
import { GlobalStyle } from './shared/styles'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('https://i.pinimg.com/originals/76/38/9f/76389f6ef17efc39df659073843881a7.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.9;

  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8)
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Timer />
      </Container>
    </>

  );
}

export default App;
