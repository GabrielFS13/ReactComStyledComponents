import styled from "styled-components"
import ItemNavegacao from "../ItemNavegacao"

const ListaStyled = styled.ul`

    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;

`

export default function BarraLateral(){
    return(
        <aside>
            <nav>
                <ListaStyled>
                    <ItemNavegacao itemAtivo = "/icones/home-ativo.png" itemDesativado="/icones/home-inativo.png" ativo={true}>
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao itemAtivo = "/icones/mais-vistas-ativo.png" itemDesativado="/icones/mais-vistas-inativo.png">
                        Mais Vistas
                    </ItemNavegacao>
                    <ItemNavegacao itemAtivo = "/icones/mais-curtidas-ativo.png" itemDesativado="/icones/mais-curtidas-inativo.png">
                        Mais Curtidas
                    </ItemNavegacao>
                    <ItemNavegacao itemAtivo = "/icones/novas-ativo.png" itemDesativado="/icones/novas-inativo.png">
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao itemAtivo = "/icones/surpreenda-me-ativo.png" itemDesativado="/icones/surpreenda-me-inativo.png">
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaStyled>
            </nav>
        </aside>
    )
}