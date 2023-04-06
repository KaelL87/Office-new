/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { Close, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '@/assets/logo_text_blue.png';
import { goURL } from '@/helpers/router';
import { callErrorToast, callSuccessToast } from '@/helpers/toast';
import { useModalBetter } from '@/hooks/useModal';
import useSafeState from '@/hooks/useSafeState';
import { useRegisterMutation } from '@/store/apis/authApiSlice';
import Form from '@/utils/Forms';

const Register: React.FC = () => {
  const [email, setEmail] = useSafeState('');
  const [name, setName] = useSafeState('');
  const [lastName, setLastName] = useSafeState('');
  const [password, setPassword] = useSafeState('');
  const [repassword, setRePassword] = useSafeState('');
  const [equalpass, setEqualPass] = useSafeState(true);
  const [validate, setValidate] = useSafeState({});

  const [eyes, setEyes] = useSafeState(false);
  const [eyes1, setEyes1] = useSafeState(false);
  const handleEyes = () => setEyes(!eyes);
  const handleEyes1 = () => setEyes1(!eyes1);
  const [register, { isLoading }] = useRegisterMutation();
  const { onIsOpen, replaceTo, onClose } = useModalBetter();
  const validateRegister = () => {
    let isValid = true;

    const validator = Form.validator({
      email: {
        value: email.trim(),
        isRequired: true,
        isEmail: true,
      },
      name: {
        value: name.trim(),
        isRequired: true,
      },
      lastName: {
        value: lastName.trim(),
        isRequired: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
      repassword: {
        value: repassword,
        isRequired: true,
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
  const registerNewUser = async e => {
    e.preventDefault();
    const validate = validateRegister();
    if (validate) {
      const data = {
        name: name,
        lastname: lastName,
        email: email.trim(),
        password: password,
      };
      const { success, message } = await register(data).unwrap();
      if (success) {
        callSuccessToast(message);
        setValidate({});
        setEmail('');
        setPassword('');
        if (onIsOpen('Register')) {
          onClose();
        } else goURL('/login');
      } else callErrorToast(message);
    }
  };
  useEffect(() => {
    setEqualPass(repassword === password);
  }, [repassword, password]);

  const goToLogin = () => {
    replaceTo('Login');
  };

  return (
    <Grid container className="login" flexDirection="column" sx={{ maxWidth: '465px' }}>
      {/* onIsOpen('Register') && (
        <Box
          display={'flex'}
          position={'absolute'}
          justifyContent="flex-end"
          sx={{ right: '10px', top: '10px', zIndex: 2 }}
        >
          <Tooltip title="Close">
            <IconButton
              size="large"
              aria-label="Cancel"
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
            Sign Up
          </Box>
          <Box>
            <form
              className="inputs"
              method="POST"
              autoComplete={'off'}
              style={{ position: 'relative', padding: '1em' }}
            >
              <Grid container rowSpacing={1} columnSpacing={2} mb={2}>
                <Grid item xs={12} sm={6}>
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
                      First Name
                    </Box>
                    <input
                      type="text"
                      placeholder="First name"
                      value={name}
                      onChange={e => setName(e.target.value)}
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
                      {(validate as any).validate && (validate as any).validate.name
                        ? (validate as any).validate.name[0]
                        : ''}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
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
                      Last Name
                    </Box>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
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
                      {(validate as any).validate && (validate as any).validate.lastName
                        ? (validate as any).validate.lastName[0]
                        : ''}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
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
                  Email
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
              <Box>
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
              </Box>
              <Box>
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
                    Re-type Password
                  </Box>
                  <input
                    type={!eyes1 ? 'password' : 'text'}
                    className="input password"
                    placeholder="Re-type Password"
                    value={repassword}
                    onChange={e => setRePassword(e.target.value)}
                    data-lpignore="true"
                  />
                  <InputAdornment position="end" className="input-icon password">
                    <IconButton aria-label="file" edge="end" onClick={handleEyes1}>
                      {!eyes1 ? (
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
                    color: !equalpass ? 'red' : 'green',
                    position: 'relative',
                    top: '-8px',
                    left: '15px',
                    fontSize: 'smaller',
                  }}
                >
                  {!equalpass
                    ? 'No matches password'
                    : repassword.length > 5 && password.length > 5
                    ? 'Matched password'
                    : ''}
                  {(validate as any).validate &&
                  repassword === '' &&
                  (validate as any).validate.repassword
                    ? (validate as any).validate.repassword[0]
                    : ''}
                </Box>
              </Box>
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
          onClick={registerNewUser}
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
              Sign Up
            </Typography>
          )}
        </Button>
        {/* <button type="submit" onClick={register}>
          Login
        </button>
        <button type="submit" onClick={register}>
          Login
        </button>
        <button type="submit" onClick={register}>
          Login
        </button> */}
      </Grid>
      <Grid item xs={12} className="footer">
        <p>
          {'Have an account?'}{' '}
          {!onIsOpen('Register') ? (
            <Link to="/login">Sign In</Link>
          ) : (
            <Link to="#" onClick={goToLogin}>
              Sign In
            </Link>
          )}
        </p>
      </Grid>
    </Grid>
  );
};

export default Register;
