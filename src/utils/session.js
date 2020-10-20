import { UserSession } from '@esri/arcgis-rest-auth';
import env from '../config/environment';


const LOCAL_STORAGE_KEY = `${env.storagePrefix}_session`;

/**
 * sign in using OAuth pop up
 */
export function signIn() {
  const { clientId, portal } = env;
  return UserSession.beginOAuth2({
    clientId,
    portal,
    popup: true,
    redirectUri: `${window.location.origin}/redirect.html`
  }).then(session => {
    // save session for next time the user loads the app
    saveSession(session);
    return session;
  });
}

/**
 * make sure the user is not logged in the next time they load the app
 */
export function signOut() {
  deleteSession();
}

/**
 * restore a previously saved session
 */
export function restoreSession() {
  const serializedSession = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  const session =
    serializedSession && UserSession.deserialize(JSON.parse(serializedSession));
  return session;
}

// save session & user for next time the user loads the app
function saveSession(session) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(session.serialize()));
}

// delete a previously saved session
function deleteSession() {
  window.localStorage.removeItem(LOCAL_STORAGE_KEY);
}