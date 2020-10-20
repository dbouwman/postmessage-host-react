import React,  { useReducer, useEffect, useCallback } from 'react';

import AppNav from './components/AppNav';
import UserMenu from './components/UserMenu';
import Home from './routes/Home';
import Demo from './routes/Demo';
import { signIn, signOut } from './utils/session';
import { actionTypes, appReducer } from './reducers/app';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App({previousSession}:any) {
  // use a reducer for state to help manage the interdependent
  // and asynchronous nature of session and user state
  const [state, dispatch] = useReducer(appReducer, {
    session: previousSession
  });
  // NOTE: when storing objects like session or user in state
  // React uses the Object.is() comparison algorithm to detect changes
  // and changes to the object's properties won't trigger a re-render
  // which is fine for this application, b/c we don't mutate their properties
  const { session, user } = state;
  // (re)fetch user info when the session is first initialized or has updated
  useEffect(() => {
    if (session && !user) {
      // fetch user info and make available to the app as state
      session.getUser().then((newUser:any) => {
        dispatch({ type: actionTypes.setUser, user: newUser });
      });
    }
  }, [session, user]);
  // use memoized callback functions for event handlers
  // see: https://reactjs.org/docs/hooks-reference.html#usecallback
  const onSignIn = useCallback(() => {
    // make session available to the app once the user signs in
    signIn().then(newSession => {
      dispatch({ type: actionTypes.setSession, session: newSession });
    });
    // NOTE: I'm not sure if [dispatch] is needed, but the above docs say:
    // "every value referenced inside the callback should also appear in the inputs array."
  }, [dispatch]);

  const onSignOut = useCallback(() => {
    // signal to app that the user has signed out by clearing user & session
    dispatch({ type: actionTypes.signOut });
    // clear the cookie, etc.
    signOut();
    // NOTE: I'm not sure if [] is needed, but in theory
    // it causes this callback to only be created once per component instance
  }, []);

  // NOTE: we bind the user menu and render it here
  // and pass it to the nav menu in order to avoid prop drilling
  // see: https://reactjs.org/docs/context.html#before-you-use-context
  const userMenu = (
    <UserMenu currentUser={user} onSignIn={onSignIn} onSignOut={onSignOut} />
  );


  return (
    <Router>
      <AppNav title="PostMessage Demo App" userMenu={userMenu} />
      <main role="main" className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/demo">
            <Demo session={session}/>
          </Route>
        </Switch>
      </main>
    </Router>
    
  );
}

export default App;
