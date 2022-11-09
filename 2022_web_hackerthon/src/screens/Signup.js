import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';

const Signup = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
      >
      <Avatar sx={{ m: 3, bgcolor: 'info.dark' }}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1" variant="h5"
          required fullWidth>
            Sign up
        </Typography>
        <div style={{
          marginTop: "20px"
        }}>이메일을 입력하세요</div>
        <TextField
        label="Email Address"
        required fullWidth
        name="email"
        autoComplete="email"
        autoFocus
        />
        <div style={{
          marginTop: "20px"
        }}>패스워드를 입력하세요</div>
        <TextField
          label="Password"
          type="password"
        required fullWidth
        name="Password"
          autoComplete="current-password" />
        
        <div style={{
          marginTop: "20px"
        }}>패스워드 확인하세요</div>
        <TextField
          label="Passwordcheck"
          type="Passwordcheck"
        required fullWidth
        name="Passwordcheck"
          autoComplete="current-Passwordcheck" />
        
        <div style={{
          marginTop: "20px"
        }}>생년월일을 입력하세요</div>

        <div style={{
          marginTop: "20px"
        }}>전화번호를 입력하세요</div>

<Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}>
        SIGN UP
      </Button>
        

        
    <div>
      회원가입할 때 필요한것.
      메일칸(중복확인), 비밀번호칸, 비번확인칸, 생년월일, 전화번호
        </div>
        
        </Box>
      </Container>
  )
}

export default Signup
