import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container
} from "@mui/material";
//import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Icon from "./Icon";
import LockIcon from '@mui/icons-material/Lock';
import Input from "./Input";
import { signin, signup } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormDate] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    //spreads all properties but only changes the target name with target value
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  /*
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.toeknId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccesful. Try Again Later");
  };
*/
  return (
    <Container style={{textAlign: "center", alignItems: "center"}} component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Avatar>
          <LockIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          {/**
          <GoogleLogin
            clientId="670409187803-3q7qhl3o64fkvnblpv2e3c6orok73mf2.apps.googleusercontent.com"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
           */}
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an Account? Sign In"
                  : "Don't have and account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
