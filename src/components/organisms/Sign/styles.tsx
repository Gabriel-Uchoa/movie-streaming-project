import styled from "styled-components"
export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background-color: #525252;
    width: 500px;
    padding: 48px;
    margin: 20px auto;
    border-radius: 24px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const StyleForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DualInput = styled.div`
    display: flex;
    gap: 20px;
`


export const AreaButtons = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    width: 100%;
`

export const Span = styled.span`
    width: 100%;
    cursor: pointer;
    padding: 10px 20px;
    &:hover{
        transition: 300ms all;
        background-color: #cfcfcf7e;
    }
    
`