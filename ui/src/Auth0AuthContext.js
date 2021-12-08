import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./configs/auth0-config";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";


export function useAuth() {
  const obj = useAuth0();
  if(obj.isAuthenticated){
    obj.displayName = obj.user.name;
    obj.getAccessTokenSilently().then(token => obj.stsTokenManager = token);
  }
  console.log(obj);
  return obj;
}

const onRedirectCallback = (appState) => {
    console.log(appState);
  // history.push(
  //   appState && appState.returnTo
  //     ? appState.returnTo
  //     : window.location.pathname
  // );
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const history = useHistory();

  // Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
  // for a full list of the available properties on the provider
  const config = getConfig();
  
  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    ...(config.audience ? { audience: config.audience } : null),
    redirectUri: window.location.origin,
    onRedirectCallback,
  };

  return <Auth0Provider {...providerConfig}>{children}</Auth0Provider>;
}
