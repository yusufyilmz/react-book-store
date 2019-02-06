import styled from 'styled-components';
import { Card, InputGroup} from 'react-bootstrap'

export const CardWrapper = styled(Card)`
    margin: 20px 0;
    text-align: center;
    font-size: larger;
    padding: 20px;
    border: 4px solid #004990!important;
`;


CardWrapper.displayName = 'CardWrapper'


export const BookWrapper = styled.div`
    height: 150px;
    width: 150px;
    margin-bottom: 35px;
    text-align: center;
    padding-top: 50px;
    border: 2px solid;
    border-style: inset;
`

BookWrapper.displayName = 'BookWrapper'


export const BookHeaderWrapper = styled(Card.Title)`
    font-size: 1.5em!important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const BookParagraphWrapper = styled.p`
    font-size: 1.2em!important;
    color: #888;
    font-size: 14px;
    margin: 0;
    padding: 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
`
BookParagraphWrapper.displayName = 'BookParagraphWrapper'


export const InputGroupWrapper = styled(InputGroup)`
    justify-content: space-around
`

export const BookListWrapper = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

export const BookAddWrapper = styled.button`
    height: 150px;
    width: 150px;
    margin-bottom: 35px;
    text-align: center;
    padding-top: 50px;
    border: 2px solid;
    border-style: inset;
`
