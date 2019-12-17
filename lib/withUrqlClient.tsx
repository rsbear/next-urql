import React from "react";
import { Provider } from "urql";
import cookie from "cookie";

import ssrPrepass from "react-ssr-prepass";
import initUrqlClient from "./initUrql";
import { useAuthUserQuery } from "../generated/graphql";

const isBrowser: boolean = typeof window !== "undefined";

const withUrqlClient = App => {
  const withUrql = props => {
    const [{ fetching, error, data }] = useAuthUserQuery();
    const urqlClient =
      props.urqlClient ||
      initUrqlClient(props.urqlState, props.serverAccessToken)[0];
    const authUser = !fetching && data && data.me ? data.me : null;
    return (
      <Provider value={urqlClient}>
        <App {...props} urqlClient={urqlClient} authUser={authUser} />
      </Provider>
    );
  };

  withUrql.getInitialProps = async ctx => {
    const { AppTree } = ctx;
    const { req, res } = ctx;
    // Run the wrapped component's getInitialProps function
    let appProps = {};
    if (App.getInitialProps) appProps = await App.getInitialProps(ctx);

    // getInitialProps is universal, but we only want
    // to run server-side rendered suspense on the server
    let serverAccessToken = "";
    if (!isBrowser) {
      const cookies = cookie.parse(
        req.headers.cookie ? req.headers.cookie : ""
      );
      if (cookies.rfs) {
        const response = await fetch("http://localhost:4000/refresh_token", {
          method: "POST",
          credentials: "include",
          headers: {
            cookie: "rfs=" + cookies.rfs
          }
        });
        const data = await response.json();
        serverAccessToken = data.accessToken;
      }
    }

    if (isBrowser) return appProps;

    const [urqlClient, ssrCache] = initUrqlClient({}, serverAccessToken);

    // Run suspense and hence all urql queries

    try {
      await ssrPrepass(
        <AppTree
          pageProps={{
            ...appProps,
            urqlClient
          }}
        />
      );
    } catch (err) {
      console.log(err);
    }

    // Extract query data from the urql store
    // Extract the SSR query data from urql's SSR cache
    const urqlState = ssrCache.extractData();

    return {
      ...appProps,
      urqlState,
      serverAccessToken
    };
  };

  return withUrql;
};

export default withUrqlClient;
