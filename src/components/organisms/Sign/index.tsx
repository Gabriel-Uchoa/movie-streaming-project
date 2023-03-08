import { useState } from "react"
import styled from "styled-components"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import { AreaButtons, Container, Span } from "./styles"

const RenderSign = () => {
    const [newUser, setNewUser] = useState(false)

    const SpanLeft = styled(Span)`
        background-color: ${newUser ? "#1111117f" : "#111111"};
        border-radius: 10px 0px 0px 10px;
    `
    const SpanRight = styled(Span)`
        background-color: ${newUser ? "#111111" : "#1111117f"};
        border-radius: 0px 10px 10px 0px;

    `
    const HanldeToSignUp = () => {
        setNewUser(false)
    }
    const HanldeToSignIn = () => {
        setNewUser(true)
    }

    return (
        <Container>
            <AreaButtons>
                <SpanLeft onClick={HanldeToSignUp}>Sign up</SpanLeft>
                <SpanRight onClick={HanldeToSignIn}>Log in</SpanRight>
            </AreaButtons>
            {newUser ? <SignIn /> : <SignUp />}
        </Container>
    )
}


export default RenderSign