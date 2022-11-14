import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from 'axios';

const Login = () => {

    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    }

    const handleInputPw = (e) => {
        setInputId(e.target.value);
    }

    const onClickLogin = () => {
        console.log('click login');
    }

    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    })

    return (
        <Container component="main" maxWidth="xs" style={{height:"500px"}}>
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
                    Sign in
                </Typography>

                <TextField
                    label="Id"
                    required
                    fullWidth
                    name="inputId"
                    value={inputId}
                    onChange={handleInputId}
                    autoComplete="current-id"
                    autoFocus
                    style={{
                        marginTop: "30px",
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    value={inputPw}
                    onChange={handleInputPw}
                    autoComplete="current-password"
                    style={{
                        marginTop: "20px",
                    }}
                />

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
            </Box>
            <div className="d-grid">
                <Button
                    className="btn btn-primary"
                    type="submit"
                    size="lg"
                    variant="contained"
                    style={{
                        marginTop: "30px",
                    }}
                >
                    SIGN IN
                </Button>
            </div>

            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        비밀번호 찾기
                    </Link>
                </Grid>
                <Grid item xs md={2}>
                    <Link href="/Signup" variant="body2">
                        회원가입
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;