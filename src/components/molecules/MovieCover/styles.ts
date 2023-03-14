import styled from "styled-components";

export const DivCover = styled.div`
    width: 500px;
    height: 281px;
    background: url(${props => props.datatype});
    background-size: 100%;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    border-radius: 2px;
    background-repeat: no-repeat;
    @media screen and (max-width: 550px) {
        width: 400px;
        height: 180px;
    }
`

export const Image = styled.img`
    cursor: pointer;
    @media screen and (max-width: 600px) {
        width: 40px;
        margin-bottom: 10px;
    }
`