import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import getUsersApi from "../../../../services/api/getUsersApi";
import store from "../../../../store";
import { setDataUserLogged } from "../../../../store/user/actions";
import { User } from "../../../../types/user.interface";
import ButtonForm from "../../../atoms/ButtonForm";
import FormField from "../../../molecules/FormField";
import { StyleForm } from "../styles";

const SignIn = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email("This email is invalid.")
                .required("This field is required"),
            password: yup.string().required("This field is required"),
        }),
        onSubmit: async (values) => {
            const response = await getUsersApi();
            const users = response.users;
            const authenticatedUser = users.find((user: User) =>
                user.email === values.email && user.password === values.password
            );
            console.log(authenticatedUser)
            if (authenticatedUser) {
                localStorage.setItem("user_watchflix_1.0", JSON.stringify({
                    id: authenticatedUser.id,
                    email: authenticatedUser.email,
                    name: authenticatedUser.name,
                    picture: authenticatedUser.picture,
                }));
                localStorage.setItem("user_token_watchflix_1.0", "logado");
                navigate("/");
            } else {
                alert(
                    "Email ou senha incorreto, lembre-se de se cadastrar no nosso sistema."
                );
                navigate("/login");
            }
        },
    });


    return (
        <div>
            <StyleForm onSubmit={formik.handleSubmit}>
                <h1>Log in</h1>
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
                <ButtonForm textContent="Log in" handleClick={formik.submitForm} />
            </StyleForm>
        </div>
    );
};

export default SignIn;
