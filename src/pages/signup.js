import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useNavigate } from 'react-router-dom';

import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes'

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = name === '' || emailAddress === '' || password === '';

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(res => {
        res.user
          // method provided by Firebase to add name and profile photo to the user
          .updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5 )+ 1
          })
          .then(() => navigate(ROUTES.BROWSE))
      })
      .catch(err => {
        setError(err.message);
      })
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              type="text"
              placeholder="Name"
              value={name}
              required
              onChange={({target}) => setName(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              required
              onChange={({target}) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              autocomplete="off"
              required
              onChange={({target}) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign In</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
