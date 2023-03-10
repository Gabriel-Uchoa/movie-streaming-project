import { useState } from "react"
import styled, { ThemedStyledProps } from "styled-components"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import { AreaButtons, Container, Span } from "./styles"

interface ISpanProps extends React.HTMLAttributes<HTMLSpanElement> {
    active?: boolean
}

const AuthForm = () => {
    const [newUser, setNewUser] = useState(true)

    const SpanLeft = styled(Span) <ThemedStyledProps<ISpanProps, any>>`
        background-color: ${props => !props.active ? "#1111117f" : "#111111"};
        border-radius: 10px 0px 0px 10px;
        @media screen and (max-width: 768px){
            border-radius: 10px 10px 0px 0px;
        }
    `
    const SpanRight = styled(Span) <ThemedStyledProps<ISpanProps, any>>`
        background-color: ${props => !props.active ? "#1111117f" : "#111111"};
        border-radius: 0px 10px 10px 0px;
        @media screen and (max-width: 768px){
            border-radius: 0px 0px 10px 10px;
        }

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
                <SpanLeft active={!newUser} onClick={HanldeToSignUp}>Sign up</SpanLeft>
                <SpanRight active={newUser} onClick={HanldeToSignIn}>Log in</SpanRight>
            </AreaButtons>
            {newUser ? <SignIn /> : <SignUp />}
        </Container>
    )
}

export default AuthForm 
