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
`

export const Image = styled.img`
    cursor: pointer;
`