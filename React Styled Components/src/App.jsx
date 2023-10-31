import { styled } from 'styled-components'
import EstilosGlobais from './components/estilosGlobais'
import Cabecalho from './components/Cabecalho'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import BannerImg from './assets/banner.png'
import Galeria from './components/Galeria'
import fotos from './fotos.json'
import { useState } from 'react'

const FundoGradient = styled.div`
      background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
      width: 100%;
      min-height: 100vh;
`

const AppContainer = styled.div`

  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainCointainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoSection = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`

function App() {
  const [fotosGaleria, setFotos] = useState(fotos)
  return (
    <FundoGradient>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainCointainer>
          <BarraLateral />
          <ConteudoSection>
            <Banner img={BannerImg} />
            <Galeria fotos = {fotosGaleria} />
          </ConteudoSection>
        </MainCointainer>
      </AppContainer>
    </FundoGradient>
  )
}

export default App
