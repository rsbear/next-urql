import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange,
} from 'urql';
import { refreshTokenExchange } from './refreshExchange'

import 'isomorphic-unfetch';

let urqlClient = null;
let ssrCache = null;

export default function initUrqlClient(initialState, serverAccessToken) {
  // Create a new client for every server-side rendered request to reset its state
  // for each rendered page
  // Reuse the client on the client-side however
  console.log(`server token ${serverAccessToken}`)
  const isServer = typeof window === 'undefined';
  if (isServer || !urqlClient) {
    ssrCache = ssrExchange({ initialState });

    urqlClient = createClient({
      url: 'http://localhost:4000/graphql',
      // Active suspense mode on the server-side
      suspense: isServer,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    });
  }

  // Return both the cache and the client
  return [urqlClient, ssrCache];
}