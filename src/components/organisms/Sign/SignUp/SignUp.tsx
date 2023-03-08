import { useFormik } from "formik";
import * as yup from "yup";
import postUsersApi from "../../../../api/postUsersApi";
import ButtonForm from "../../../atoms/ButtonForm";
import FormField from "../../../molecules/FormField";
import { DualInput, StyleForm } from "../styles";

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            password: '',
            password_confirm: '',
            email: '',
            picture: '',
            phone: '',
        },
        validationSchema: yup.object({
            first_name: yup.string().required("Is required"),
            last_name: yup.string().required("Is required"),
            password: yup.string().min(5, 'Password is short - 5 chars minimum.').required("Is required"),
            password_confirm: yup.string().required("Required").oneOf([yup.ref('password')], 'Your passwords do not match.'),
            email: yup.string().email("This email is invalid.").required("Is required"),
            phone: yup.string().required("Is required"),
            picture: yup.string().url("This Url is Invalid").required("Is required")
        }),
        onSubmit: (values) => {
            console.log(values)
            postUsersApi(
                {
                    name: values.first_name.toLowerCase() + " " + values.last_name.toLowerCase(),
                    email: values.email.toLowerCase(),
                    password: values.password,
                    phone: values.phone,
                    picture: values.picture
                })
        },
    });
    return (
        <StyleForm onSubmit={formik.handleSubmit} >
            <h1>Sign up</h1>
            <DualInput>
                <FormField
                    label="First name"
                    name="first_name"
                    onChange={formik.handleChange}
                    placeholder="your first name"
                    value={formik.values.first_name}
                    error={formik.errors.first_name}
                />
                <FormField
                    label="Last name"
                    name="last_name"
                    onChange={formik.handleChange}
                    placeholder="your last name"
                    value={formik.values.last_name}
                    error={formik.errors.last_name}
                />
            </DualInput>
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
                label="Confirm Password"
                name="password_confirm"
                type="password"
                onChange={formik.handleChange}
                placeholder="Confirm your password"
                value={formik.values.password_confirm}
                error={formik.errors.password_confirm}
            />
            <FormField
                label="Email Adress"
                name="email"
                onChange={formik.handleChange}
                placeholder="your e-mail"
                value={formik.values.email}
                error={formik.errors.email}
            />
            <DualInput>
                <FormField
                    label="Phone Number"
                    name="phone"
                    onChange={formik.handleChange}
                    placeholder="your phone number"
                    value={formik.values.phone}
                    error={formik.errors.phone}
                />
                <FormField
                    label="Avatar url"
                    name="picture"
                    onChange={formik.handleChange}
                    placeholder="your picture in url"
                    value={formik.values.picture}
                    error={formik.errors.picture}
                />
            </DualInput>
            <ButtonForm textContent="Sign up" handleClick={formik.submitForm} />
        </StyleForm>
    )
}

export default SignUp