import styled from "styled-components"

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
                    <li>
                        <a href="">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Mais vistas
                        </a>
                    </li>
                </ListaStyled>
            </nav>
        </aside>
    )
}