import styled from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    color: #D9D9D9;
    font-size: 24px;
    line-height: 28.8px;
    p{
        width: 219px;
    }

    .buttons{
        display: flex;
        gap: 24px;
    }

    .buttons button{
        height: 49px;
        padding: 10px, 8px, 10px, 8px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        background-color: rgba(217, 217, 217, 0.3);
        border: 2px solid transparent;
    }

    .active{
        background: linear-gradient(to bottom, #D9D9D94D, #D9D9D94D) padding-box,
              linear-gradient(to right, rgba(201, 140, 241, 1), rgba(123, 120, 229, 1)) border-box;
        border-radius: 10px;
    }
`


export default function Tags({ativo}){
    return (
        <TagsContainer>
            <p>Busque por tags: </p>
            <div className="buttons">
            {tags.map(item => (
                <button key={item.id} className={ativo == item.id ? 'active' : ''}>{item.titulo}</button>
            ))}
            </div>
        </TagsContainer>
    )
}