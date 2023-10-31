import styled from "styled-components"

const ImagemContainer = styled.div`
    width: 448px;
    height: 336px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: -10px;
    img{
        width: 448px;
        height: 256px;
    }
    .imagem_infos{
        background-color: #001634;
        height: 80px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 16px;
    }
    p{
        margin: 0;
    }
    .title{
        font-weight: bold;
    }
    .font_e_icones{
        display: flex;
        justify-content: space-between;
    }
    .font_e_icones img{
        width: 24px;
        height: 24px;
        margin-left: 16px;
    }
`

export default function Imagem({ foto }) {
    return (
        <ImagemContainer>
            <img src={foto.path} alt={foto.titulo} />
            <div className="imagem_infos">
                <p className="title">
                    {foto.titulo}
                </p>
                <div className="font_e_icones">
                    <p>Fonte: {foto.fonte}</p>
                    <p>
                        <img src="/icones/favorito.png" alt="Favoritar"/>
                        <img src="/icones/expandir.png" alt="Expandir imagem"/>
                    </p>
                </div>
            </div>
        </ImagemContainer>
    )
}