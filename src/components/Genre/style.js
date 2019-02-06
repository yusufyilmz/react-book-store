


import styled from 'styled-components';
import { Card , InputGroup} from 'react-bootstrap'

export const CardWrapper = styled(Card)`
    margin: 20px 0;
    text-align: center;
    font-size: larger;
    padding: 20px;
    border: 4px solid #004990!important;
`;


CardWrapper.displayName = 'CardWrapper'


export const InputGroupWrapper = styled(InputGroup)`
    justify-content: space-around
`


export const GenreWrapper = styled.div`
    height: 150px;
    width: 150px;
    margin-bottom: 35px;
    text-align: center;
    padding-top: 50px;
    border: 2px solid;
    border-style: inset;
`

export const GenreHeaderWrapper = styled.h3`
    font-size: 16px;
    margin: 15px 0 8px;
    padding: 0 15px;
    line-height: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const GenreParagraphWrapper = styled.p`
    color: #888;
    font-size: 14px;
    margin: 0;
    padding: 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
`

GenreWrapper.displayName = 'GenreWrapper'


export const GenreListWrapper = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

export const GenreAddWrapper = styled.button`
    height: 150px;
    width: 150px;
    margin-bottom: 35px;
    text-align: center;
    padding-top: 50px;
    border: 2px solid;
    border-style: inset;
`


