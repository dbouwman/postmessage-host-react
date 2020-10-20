/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react';

function getIframeUrl (url:string, validOrigins: string[]) {
  // TODO: verify url is in list of valid origins
  return `${url}?arcgis-auth-origin=${encodeURIComponent(window.location.origin)}`;
}

function IFrameApp({ url , validOrigins, session}:any) {
  // const [url, setUrl] = useState();

  useEffect(() => {
    // start the post message auth process
    if (session) {
      session.enablePostMessageAuth(validOrigins);
      return () => {
        // when this component is removed, ensure we disable it
        session.disablePostMessageAuth();
      }
    }
  })
  
  if (!url || !session) {
    // show sign in link
    return (
      <div className="jumbotron my-4">
        <h2>IFrameApp component needs to be passed a url for an app, and user must be authenticated</h2>
      </div>
      
    );
  }
  // show user menu
  return (
    <div className="my-4">
      <p>Embedding {getIframeUrl(url, validOrigins)} </p>
      <iframe title="iframe app"className="col-sm-12" src={getIframeUrl(url, validOrigins)} height="400px"></iframe>
    </div>
  );
}

export default IFrameApp;