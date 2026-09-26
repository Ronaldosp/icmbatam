import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

import { register } from "../store/action/actionCreator";

import "../styling/RegisterPage.scss";

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = (event) => {
        event.preventDefault();

        if (!email.trim() || !password.trim() || !username.trim()) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email, password, username and role are required",
            });

            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Passwords do not match",
            });

            return;
        }

        const registerDataAdmin = {
            email,
            password,
            username,
        };

        dispatch(register(registerDataAdmin))
            .then(() => {
                Swal.fire(
                    "Success",
                    "Admin Register Successful!",
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
        <div className="RegisterPage-Component">

            <div className="RegisterPage-Component__container">

                <div className="RegisterPage-Component__card">

                    <h1 className="RegisterPage-Component__title">
                        Register Form
                    </h1>

                    <form
                        className="RegisterPage-Component__form"
                        onSubmit={handleRegister}
                    >

                        {/* Username */}
                        <div className="RegisterPage-Component__field">

                            <label className="RegisterPage-Component__label">
                                Username
                            </label>

                            <input
                                className="RegisterPage-Component__input"
                                type="text"
                                value={username}
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                                required
                            />

                        </div>

                        {/* Email */}
                        <div className="RegisterPage-Component__field">

                            <label className="RegisterPage-Component__label">
                                Email
                            </label>

                            <input
                                className="RegisterPage-Component__input"
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                required
                            />

                        </div>

                        {/* Password */}
                        <div className="RegisterPage-Component__field">

                            <label className="RegisterPage-Component__label">
                                Password
                            </label>

                            <div className="RegisterPage-Component__password-wrapper">

                                <input
                                    className="RegisterPage-Component__input"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                    required
                                />

                                <button
                                    type="button"
                                    className="RegisterPage-Component__password-toggle"
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>

                            </div>

                        </div>

                        {/* Confirm Password */}
                        <div className="RegisterPage-Component__field">

                            <label className="RegisterPage-Component__label">
                                Confirm Password
                            </label>

                            <input
                                className="RegisterPage-Component__input"
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(event) => {
                                    setConfirmPassword(event.target.value);
                                }}
                                required
                            />

                        </div>

                        {/* Button */}
                        <div className="RegisterPage-Component__button-wrapper">

                            <Button
                                type="submit"
                                variant="dark"
                                className="RegisterPage-Component__button"
                            >
                                Register
                            </Button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default RegisterPage;