import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { login } from "../store/action/actionCreator";
import "../styling/LoginPage.scss";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        const loginData = {
            email,
            password
        };

        console.log(loginData, "LOG");

        dispatch(login(loginData))
            .then(() => {
                Swal.fire(
                    "Success",
                    "Admin Login Successful!",
                    "success"
                );

                navigate("/");
            })
            .catch((error) => {
                Swal.fire(
                    "Error",
                    error.message,
                    "error"
                );
            });
    };

    return (
        <div className="LoginPage-Component">

            <div className="LoginPage-Component__container">

                <div className="LoginPage-Component__card">

                    <h1 className="LoginPage-Component__title">
                        Login
                    </h1>

                    <form
                        className="LoginPage-Component__form"
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleLogin();
                        }}
                    >

                        <div className="LoginPage-Component__field">
                            <label className="LoginPage-Component__label">
                                Email
                            </label>

                            <input
                                className="LoginPage-Component__input"
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                required
                            />
                        </div>

                        <div className="LoginPage-Component__field">
                            <label className="LoginPage-Component__label">
                                Password
                            </label>

                            <input
                                className="LoginPage-Component__input"
                                type="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                required
                            />
                        </div>

                        <div className="LoginPage-Component__button-wrapper">

                            <Button
                                type="submit"
                                variant="outline-success"
                                className="LoginPage-Component__button"
                            >
                                Login
                            </Button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default LoginPage;