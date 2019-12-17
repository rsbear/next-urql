import { mergeMap, pipe, fromPromise, map, fromValue } from "wonka";
import cookie from 'cookie'

const isServer = () => typeof window === "undefined";

export const refreshTokenExchange = () => {
  return true
}


//
//
//
//
//

// export const refreshTokenExchange = () => {
//   let promise;
//   return ({ forward }) => ops$ =>
//     pipe(
//       ops$,
//       mergeMap(op => {
//         if (isTokenExpired()) {
//           return pipe(
//             fromPromise(promise ? promise : (promise = refreshToken())),
//             map(newToken => {
//               promise = undefined;
//               // window.localStorage.setItem(
//               //   "token",
//               //   window.btoa(JSON.stringify(newToken))
//               // );
//               return {
//                 ...op,
//                 context: {
//                   // ...op.context, token: newToken 
//                 }
//               };
//             })
//           );
//         } else {
//           return fromValue({
//             // ...op,
//             context: {
//               // ...op.context, token: readToken()
//             }
//           });
//         }
//       }),
//       forward
//     );
// };