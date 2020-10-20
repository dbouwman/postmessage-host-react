import React, {useState} from 'react';
import IFrameApp from '../components/IFrameApp';

const defaultUrl = 'http://localui.arcgis.com:3001';
const origins = ['http://localui.arcgis.com:3001']

function Demo({session}:any) {
  const [appUrl, setAppUrl] = useState(defaultUrl)
  const validOrigins = origins;

  return (
    <div>
      <form >
        <div className="form-row align-items-center">
          <div className="col-sm-2">
            <label htmlFor="appUrl">Application Url</label>
          </div>
          <div className="col-sm-8">
            <input className="form-control" type="text" id="appUrl" placeholder="Enter url to the app..." value={appUrl} onChange={e => setAppUrl(e.target.value)}/>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" type="button" onClick={() => setAppUrl(appUrl)}>Load</button>
          </div>
          <p className="small my-1">Valid Origins: {validOrigins.join(', ')}</p>
        </div>
      </form>

      <IFrameApp url={appUrl} validOrigins={validOrigins} session={session}></IFrameApp>
    </div>
  );
}

export default Demo;