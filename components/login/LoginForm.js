// STARTED DOING CHANGES !!!!!


import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { WP_BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const url = WP_BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const history = useRouter();

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
            setAuth(response.data);
            history.push("/admin");
        } catch (error) {
            console.log("error", error);
            setLoginError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {loginError && <FormError>{loginError}</FormError>}
                <fieldset disabled={submitting}>
                    <div className="mb-3">
                        <input name="username" placeholder="Username" {...register('username')} className="border border-black p-2" />
                        {errors.username && <FormError>{errors.username.message}</FormError>}
                    </div>

                    <div className="mb-3">
                        <input name="password" placeholder="Password" {...register('password')} type="password" className="border border-black p-2" />
                        {errors.password && <FormError>{errors.password.message}</FormError>}
                    </div>
                    <button className="border border-black p-1 rounded bg-yellow-400">{submitting ? "Loggin in..." : "Login"}</button>
                </fieldset>
            </form>
        </>
    );
}