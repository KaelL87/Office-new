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
import { useAppDispatch } from '@/helpers/ndex';
import { goURL } from '@/helpers/router';
import { callErrorToast, callSuccessToast } from '@/helpers/toast';
import { useModalBetter } from '@/hooks/useModal';
import useSafeState from '@/hooks/useSafeState';
import {
  useForgotSendMailMutation,
  useForgotSendNewCredentialsMutation,
} from '@/store/apis/authApiSlice';
import { logOut } from '@/store/slices/authSlice';
import Form from '@/utils/Forms';

const Forgot: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useSafeState('');
  const [code, setCode] = useSafeState('');
  const [password, setPassword] = useSafeState('');
  const [sendCode, setSendCode] = useSafeState(false);
  const [validate, setValidate] = useSafeState({});
  const [showPassword, setShowPassword] = useSafeState(false);
  const [eyes, setEyes] = useSafeState(false);
  const handleEyes = () => setEyes(!eyes);
  const { onIsOpen, replaceTo } = useModalBetter();
  const [forgotSendMail, { isLoading }] = useForgotSendMailMutation();

  const [forgotSendNewCredentials] = useForgotSendNewCredentialsMutation();

  const validateforgotPassword = () => {
    let isValid = true;

    const validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
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

  const validateforgotPassword1 = () => {
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
      code: {
        value: code,
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

  const forgotPassword = async () => {
    let validate = false;
    if (!sendCode) {
      validate = validateforgotPassword();
    } else {
      validate = validateforgotPassword1();
    }
    if (validate && !sendCode) {
      const data = {
        email: email.trim(),
      };
      const { success, message } = await forgotSendMail(data).unwrap();
      if (success) {
        setSendCode(true);
        callSuccessToast(message);
      } else callErrorToast('Change password error, try later');
    } else if (validate && sendCode) {
      const data = {
        code: code,
        password: password,
      };
      const res = await forgotSendNewCredentials(data).unwrap();
      console.log(res);
      if (res) {
        if (res.success) {
          callSuccessToast(res.message);
        } else callErrorToast('Change password error, try later');
      }
      setSendCode(false);
      setValidate({});
      setEmail('');
    }
  };
  const toLogin = () => {
    setShowPassword(!showPassword);
    setSendCode(false);
    setValidate({});
    setEmail('');
    dispatch(logOut());
    goURL('/login');
  };
  return (
    <Grid container className="login" flexDirection="column" sx={{ maxWidth: '465px' }}>
      <Grid item xs={12}>
        <Box className="Forms" display="flex" flexDirection="column">
          <Box mb={3}>
            <img src={logo} width="fit-content" height="70px" />
          </Box>
          <Box mt={3}>
            <form
              className="inputs"
              method="POST"
              onSubmit={forgotPassword}
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
              {sendCode && (
                <>
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
                      Code
                    </Box>
                    <input
                      type="text"
                      placeholder="Code"
                      value={code}
                      onChange={e => setCode(e.target.value)}
                    />
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
                </>
              )}
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
          onClick={forgotPassword}
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
              {!sendCode ? 'Forgot Password' : 'Change Password'}
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
          {!onIsOpen('Forgot') ? (
            <Link to="/login">Back to Login</Link>
          ) : (
            <Link to="#" onClick={() => replaceTo('Login')}>
              Back to Login
            </Link>
          )}
        </p>
      </Grid>
    </Grid>
  );
};

export default Forgot;
