import { StyleButton } from "./styles"

const ButtonForm: React.FC<{ textContent: string }> = (props) => {
    return (
        <StyleButton type="submit">{props.textContent}</StyleButton>
    )
}

export default ButtonForm