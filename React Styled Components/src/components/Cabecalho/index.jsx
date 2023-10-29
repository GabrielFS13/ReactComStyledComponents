import styled from "styled-components"
import CampoDeTexto from "../CampoDeTexto"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`

export default function Cabecalho() {
    return (
        <HeaderStyled>
            <img src="/imagens/logo.png" alt="Imagem" />
            <CampoDeTexto />
        </HeaderStyled>
    )
}