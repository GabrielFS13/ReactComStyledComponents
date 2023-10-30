import styled from "styled-components";

const TituloStyled = styled.h2`
 color: #7B78E5;
 font-size: 32px;
 line-height: 38.4px;
 font-family: "GandhiSansRegular";
 text-align: ${props => props.$alinhamento ? props.$alinhamento : "left"}
`

export default TituloStyled