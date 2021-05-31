import jwt_decode from "jwt-decode";
const cookieparser = process.server ? require("cookieparser") : "";
// import cookieparser from "cookieparser";

export function getUserFromCookie(req) {
  if (process.server && process.static) return;
  if (!req.headers.cookie) return; // auth_token=[object%20Object]
  console.log("kekeke");
  const parsed = cookieparser.parse(req.headers.cookie); // {auth_token: '[object Object]'}
  // const authTokenCookie = JSON.parse(JSON.stringify(parsed.auth_token)); // [object Object]
  // const authTokenCookie = JSON.stringify(parsed.auth_token); // [object Object]
  const authTokenCookie = parsed.auth_token;
  console.log(authTokenCookie);

  if (!authTokenCookie) return;
  console.log("papapapapapapa");
  // const decodedToken = jwt_decode(authTokenCookie);

  // if (!decodedToken) return;

  // return decodedToken;
  return authTokenCookie;
}
