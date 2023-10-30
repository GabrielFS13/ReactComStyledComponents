import styled from "styled-components";
import TituloStyled from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";

const GaleriaContainer = styled.div`
display: flex;
`
const SecaoFluida = styled.section`
flex-grow: 1;
`

export default function Galeria() {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <TituloStyled>Navegue pela galeria</TituloStyled>

                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}