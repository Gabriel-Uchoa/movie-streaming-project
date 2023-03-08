import styled from "styled-components"

interface Field {
    name: string,
    label: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string,
    type?:string
    error?: string,
}

const ErrorMensage = styled.span`
    color: #ed3548;
    float: right;
    font-weight: bold;
    font-size: 14px;
`

const FormFieldStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0px;
    color: white;
    width: 100%;
    &>input{
        border: 1px solid black;
        width: 100%;
        background-color: #525252;
        padding: 10px 20px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        outline:none;
        &:focus{
            outline: 1px solid black;
        }
    }
    &>label{
        margin: 5px 0px;   
    }
`

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