import styled from "styled-components";

export const DivMovieCard = styled.div`
    background-color: grey;
    height: 360px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    margin-top: 30px;
    cursor: pointer;
    :hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    
        transition-duration: 0.5s;
    }
`