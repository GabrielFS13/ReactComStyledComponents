import styled from "styled-components";

const CampoDeTextoStyled = styled.div`
    min-width: 602px;
    height: 56px;
    background: linear-gradient(#041c44 ,#041c44) padding-box,
              linear-gradient(to right, rgba(201, 140, 241, 1), rgba(123, 120, 229, 1)) border-box;
    border-radius: 10px;
    border: 2px solid transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    input{
        background: transparent;
        border: none;
        min-height: 100%;
        width: 200px;
        color: white;
        outline: none;
        padding-left: 10px;
    }
    ::placeholder{
        color: white;
    }
`

export default function CampoDeTexto() {
    return (
        <CampoDeTextoStyled>
            <input type="text" placeholder="O que você procura?" />
            <img src="" alt="LUPA" />
        </CampoDeTextoStyled>
    )
}
