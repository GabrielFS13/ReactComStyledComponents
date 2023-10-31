import styled from "styled-components";
import TituloStyled from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
display: flex;
`
const SecaoFluida = styled.section`
flex-grow: 1;
`

const SecaoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
`

export default function Galeria({ fotos = [] }) {
    return (
        <>
            <Tags ativo={0} />
            <GaleriaContainer>
                <SecaoFluida>
                    <TituloStyled>Navegue pela galeria</TituloStyled>
                    <SecaoContainer>
                        {fotos.map(foto => <Imagem foto={foto} key={foto.id} />)}
                    </SecaoContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}