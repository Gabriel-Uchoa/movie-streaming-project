import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import getUsersApi from "../../../../api/getUsersApi";
import ButtonForm from "../../../atoms/ButtonForm";
import FormField from "../../../molecules/FormField";
import { StyleForm } from "../styles";

const SignIn = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string().email("This email is invalid.").required("This field is required"),
            password: yup.string().required("This field is required"),
        }),
        onSubmit: (values) => {
            console.log(values)
            console.log(getUsersApi().then(result => console.log(result)))
            localStorage.setItem("user-token", "logado")
            navigate('/')
        },
    });
    return (
        <div>
            <StyleForm onSubmit={formik.handleSubmit} >
                <h1>Log in</h1>
                <FormField
                    label="Password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    placeholder="your password"
                    value={formik.values.password}
                    error={formik.errors.password}
                />
                <FormField
                    label="Email Adress"
                    name="email"
                    onChange={formik.handleChange}
                    placeholder="your e-mail"
                    value={formik.values.email}
                    error={formik.errors.email}
                />
                <ButtonForm textContent="Log in" handleClick={formik.submitForm} />

            </StyleForm>
        </div>
    )
}

export default SignIn