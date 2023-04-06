/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '@/assets/logo_text_blue.png';
import { useAppSelector } from '@/helpers/ndex';
import { goURL } from '@/helpers/router';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import { useModalBetter } from '@/hooks/useModal';
import useSafeState from '@/hooks/useSafeState';
import { useLoginMutation, useVerifyUserMutation } from '@/store/apis/authApiSlice';
import { isAuthenticated } from '@/store/slices/authSlice';
import Form from '@/utils/Forms';

const Login: React.FC = () => {
  const { onIsOpen, onClose, replaceTo } = useModalBetter();
  const [email, setEmail] = useSafeState('');
  const [password, setPassword] = useSafeState('');
  const [validate, setValidate] = useSafeState({});
  const [eyes, setEyes] = useSafeState(false);
  const handleEyes = () => setEyes(!eyes);
  const isAuth: boolean = useAppSelector(isAuthenticated);

  const [login, { isLoading }] = useLoginMutation();
  const [verifyUser] = useVerifyUserMutation();

  const validateLogin = () => {
    let isValid = true;

    const validator = Form.validator({
      email: {
        value: email.trim(),
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };
  const authenticate = async e => {
    e.preventDefault();

    const validate = validateLogin();

    if (validate) {
      try {
        const data = {
          email: email,
          password: password,
        };
        await login(data).unwrap();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const goToRegister = () => {
    replaceTo('Register');
  };
  const goToForgot = () => {
    replaceTo('Forgot');
  };
  useDidMountEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get('verify');
    if (singleValue !== null) {
      verifyUser({ code: singleValue as string });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  useDidMountEffect(() => {
    if (isAuth) {
      setValidate({});
      setEmail('');
      setPassword('');
      if (!onIsOpen('Login')) goURL('/dashboard');
      else onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <Grid container className="login" flexDirection="column">
      {/* onIsOpen('Login') && (
        <Box
          display={'flex'}
          position={'absolute'}
          justifyContent="flex-end"
          sx={{ right: '10px', top: '10px', zIndex: 2 }}
        >
          <Tooltip title="Close">
            <IconButton
              size="large"
              aria-label="Close"
              color="inherit"
              onClick={() => onClose()}
              sx={{ padding: '2px' }}
            >
              <Close sx={{ color: 'black' }} fontSize={'large'} />
            </IconButton>
          </Tooltip>
        </Box>
      ) */}
      <Grid item xs={12}>
        <Box className="Forms">
          <Box>
            <img src={logo} width="fit-content" height="70px" />
          </Box>
          <Box
            mt={3}
            mb={3}
            sx={{
              float: 'left',
              color: 'black',
              position: 'relative',
              fontWeight: '700',
              fontSize: '28px',
              marginLeft: '13px',
            }}
          >
            Welcome Back!
          </Box>
          <Box>
            <form
              className="inputs"
              method="POST"
              onSubmit={authenticate}
              autoComplete={'off'}
              style={{ position: 'relative', padding: '1em' }}
            >
              <Box className="input-wrapper">
                <Box
                  sx={{
                    float: 'left',
                    color: 'black',
                    position: 'relative',
                    fontWeight: '700',
                    fontSize: '14px',
                  }}
                >
                  Username
                </Box>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Box
                  sx={{
                    float: 'left',
                    color: 'red',
                    position: 'relative',
                    top: '-8px',
                    left: '15px',
                    fontSize: 'smaller',
                  }}
                >
                  {(validate as any).validate && (validate as any).validate.email
                    ? (validate as any).validate.email[0]
                    : ''}
                </Box>
              </Box>
              <Box className="input-wrapper" mt={3}>
                <Box
                  sx={{
                    float: 'left',
                    color: 'black',
                    position: 'relative',
                    fontWeight: '700',
                    fontSize: '14px',
                  }}
                >
                  Password
                </Box>
                <input
                  type={!eyes ? 'password' : 'text'}
                  className="input password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  data-lpignore="true"
                />
                <InputAdornment position="end" className="input-icon password">
                  <IconButton aria-label="file" edge="end" onClick={handleEyes}>
                    {!eyes ? (
                      <Visibility sx={{ color: 'black' }} />
                    ) : (
                      <VisibilityOff sx={{ color: 'black' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              </Box>
              <Box
                sx={{
                  float: 'left',
                  color: 'red',
                  position: 'relative',
                  top: '-8px',
                  left: '15px',
                  fontSize: 'smaller',
                }}
              >
                {(validate as any).validate && (validate as any).validate.password
                  ? (validate as any).validate.password[0]
                  : ''}
              </Box>
              <p className="light">
                {!onIsOpen('Login') ? (
                  <Link to="/forgot-password">Forgot password?</Link>
                ) : (
                  <Link to="#" onClick={goToForgot}>
                    Forgot password?
                  </Link>
                )}
              </p>
            </form>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} width="90%" margin={'auto'}>
        <Button
          fullWidth
          variant="contained"
          size="small"
          type="submit"
          onClick={authenticate}
          disabled={isLoading}
          sx={{
            backgroundColor: '#00509D',
            padding: '1em 2em',
            '&:hover': {
              backgroundColor: '#00296B',
              borderColor: '#0062cc',
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
              backgroundColor: '#00296B',
              borderColor: '#005cbf',
            },
          }}
        >
          {isLoading && <CircularProgress size={20} sx={{ color: '#00296B' }} />}
          {!isLoading && (
            <Typography variant="body1" sx={{ color: 'white !important' }}>
              Login
            </Typography>
          )}
        </Button>
        {/* <button type="submit" onClick={authenticate}>
          Login
        </button>
        <button type="submit" onClick={authenticate}>
          Login
        </button>
        <button type="submit" onClick={authenticate}>
          Login
        </button> */}
      </Grid>
      <Grid item xs={12} className="footer">
        <p>
          {"Don't have an account?"}{' '}
          {!onIsOpen('Login') ? (
            <Link to="/register">Sign Up</Link>
          ) : (
            <Link to="#" onClick={goToRegister}>
              Sign Up
            </Link>
          )}
        </p>
      </Grid>
    </Grid>
  );
};

export default Login;
