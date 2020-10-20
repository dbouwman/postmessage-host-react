// NOTE: this is a good place to store any variables
// that change depending on the application's environment
// see https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables


// defaults that all environments fall back to
const env = {
  // OAuth settings
  // see: https://esri.github.io/arcgis-rest-js/guides/browser-authentication/
  // when deploying to your own domain, you should first
  // create your own item and register the URL where it will be deployed
  // and then use that application's App ID as the clientId below
  portal: 'https://qaext.arcgis.com/sharing/rest',
  clientId: 'GHgwJ9r9lplXVVWm',
  // LocalStorage session key will be prefixed with the following
  storagePrefix: 'demoApp'
  // NOTE: currently the application assumes that it will be deployed to the server's root
  // if it needs to be deployed to a subfolder, we'd need to add a variable here for that
  // see: https://facebook.github.io/create-react-app/docs/deployment#building-for-relative-paths
};
// to change any of the above on a per environment basis, do something like
// use different cookies for different environments
const ENV = process.env.REACT_APP_ENV;
if (ENV === 'QAEXT') {
  env.portal = 'https://qaext.arcgis.com/sharing/rest';
  env.clientId = 'GHgwJ9r9lplXVVWm';
  // BACKING ITEM: https://dc.mapsqa.arcgis.com/home/item.html?id=b11a632793ea481796e256c3d0053df5
}
if (ENV === 'DEVEXT') {
  env.portal = 'https://devext.arcgis.com/sharing/rest';
  env.clientId = 'NOT_CONFIGURED';
}
if (ENV === 'PROD') {
  env.portal = 'https://www.arcgis.com/sharing/rest';
  env.clientId = 'NOT_CONFIGURED';
}


export default env;