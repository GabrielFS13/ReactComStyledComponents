import styled from "styled-components"

const ItemNavegacaiStyled = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? "#7B78E5" : "#D9D9D9"};
    font-family: ${props => props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
    display: flex;
    align-items: center;
    gap: 24px;
`


export default function ItemNavegacao({itemAtivo, itemDesativado, children, ativo = false}){
    return (
        <ItemNavegacaiStyled $ativo = {ativo}>
            <img src={ativo ? itemAtivo : itemDesativado} alt="Ícone" />
            {children}
        </ItemNavegacaiStyled>
    )
}