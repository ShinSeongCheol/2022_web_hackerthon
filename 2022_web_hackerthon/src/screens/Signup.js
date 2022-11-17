import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Signup = () => {

    const [inputEmail, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const handleInputId = (e) => {
        setInputId(e.target.value);
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }

    const onClickRegister = () => {
        console.log("click!");
        axios
            .post("/api/Signup", {
                Email: inputEmail,
                Password: inputPw,
            })
            .then(function (response) {
                if(response.data.success) {
                    window.location.href="/";
                } else {
                    document.alert("dd");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <Container id="container" component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 3, bgcolor: "info.dark" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" required fullWidth>
                    Sign up
                </Typography>
                <div
                    style={{
                        marginTop: "20px",
                    }}
                >
                    이메일을 입력하세요
                </div>
                <TextField
                    label="Email Address"
                    required
                    fullWidth
                    name="email"
                    value={inputEmail}
                    onChange={handleInputId}
                    autoComplete="email"
                    autoFocus
                />
                <div
                    style={{
                        marginTop: "20px",
                    }}
                >
                    패스워드를 입력하세요
                </div>
                <TextField
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    name="Password"
                    value={inputPw}
                    onChange={handleInputPw}
                    autoComplete="current-password"
                />

                <div
                    style={{
                        marginTop: "20px",
                    }}
                >
                    패스워드 확인하세요
                </div>
                <TextField
                    label="Passwordcheck"
                    type="Passwordcheck"
                    required
                    fullWidth
                    name="Passwordcheck"
                    autoComplete="current-Passwordcheck"
                />

                <div
                    style={{
                        marginTop: "20px",
                    }}
                >
                    생년월일을 입력하세요
                    <br />
                    <input type="date" />
                </div>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={onClickRegister}
                >
                    SIGN UP
                </Button>
            </Box>
        </Container>
    );
};

export default Signup;
