import styled from "styled-components"
import { ErrorMensage, FormFieldStyle } from "./styles"

interface Field {
    name: string,
    label: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string,
    type?: string
    error?: string,
}

const FormField = (props: Field) => {

    return (
        <FormFieldStyle>
            <label htmlFor={props.name}>{props.label} <ErrorMensage>{props.error}</ErrorMensage></label>
            <input
                name={props.name}
                type={props.type ?? "text"}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </FormFieldStyle>
    )
}

export default FormField