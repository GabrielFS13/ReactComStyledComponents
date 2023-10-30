import styled from "styled-components"

const BannerStyled = styled.div`
    max-width: 100%;
    height: 328px;
    border-radius: 20px;
    background-image: url(${props => props.$backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;

    h2{
        color: white;
        font-size: 40px;
        line-height: 48px;
        width: 301px;
        height: 144px;
        padding-left: 120px;
        padding-top: 40px;
        font-weight: 400px;
        font-family: "GandhiSansRegular";
    }
    
`

export default function Banner({img}){
    return(
        <BannerStyled $backgroundImg = {img}>
            <h2>A galeria mais completa de fotos do espaço!</h2>
        </BannerStyled>
    )
}