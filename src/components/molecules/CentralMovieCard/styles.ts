import styled from "styled-components";

export const DivCentralMovie = styled.div`
    min-height: 360px;
    background: url(${props => props.datatype});
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: space-between;
    margin-bottom: 30px;
    cursor: pointer;
    :hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    
        transition-duration: 0.5s;
    }
`