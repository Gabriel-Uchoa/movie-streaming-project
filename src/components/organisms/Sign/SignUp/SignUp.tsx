import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import postUsersApi from "../../../../services/api/postUsersApi";
import EmailUsed from "../../../../utils/EmailUsed";
import ButtonForm from "../../../atoms/ButtonForm";
import FormField from "../../../molecules/FormField";
import { DualInput, StyleForm } from "../styles";

const SignUp = () => {
    const [exist, setExiste] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            password: "",
            email: "",
            picture: "",
            phone: "",
        },
        validationSchema: yup.object({
            first_name: yup.string().required("Is required"),
            last_name: yup.string().required("Is required"),
            password: yup
                .string()
                .min(5, "Password is short - 5 chars minimum.")
                .required("Is required"),
            email: yup
                .string()
                .email("This email is invalid.")
                .required("Is required")
                .test("EmailInUse", "E-mail already registered", function () {
                    EmailUsed(formik.values.email).then((resolve) => {
                        setExiste(!resolve);
                    });
                    return exist;
                }),

            phone: yup.string().required("Is required"),
            picture: yup.string().url("This Url is Invalid").required("Is required"),
        }),
        onSubmit: async (values) => {
            await postUsersApi({
                name: values.first_name.toLowerCase() + " " + values.last_name.toLowerCase(),
                email: values.email.toLowerCase(),
                password: values.password,
                phone: values.phone,
                picture: values.picture,
            }).then(function (response) {
                alert("Usuário cadastrado com sucesso");
            }).catch(function (error) {
                alert("Erro 500, tente novamente mais tarde.");
            });
        },
    });

    return (
        <StyleForm onSubmit={formik.handleSubmit}>
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
                label="Email Adress"
                name="email"
                onChange={formik.handleChange}
                placeholder="your e-mail"
                value={formik.values.email}
                error={formik.errors.email}
            />
            <FormField
                label="Password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                placeholder="your password"
                value={formik.values.password}
                error={formik.errors.password}
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
    );
};

export default SignUp
