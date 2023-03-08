import { StyleButton } from "./styles"

const ButtonForm: React.FC<{ textContent: string, handleClick: React.MouseEventHandler<HTMLButtonElement> }> = (props) => {
    return (
        <StyleButton type="submit" onClick={props.handleClick}>{props.textContent}</StyleButton>
    )
}

export default ButtonForm