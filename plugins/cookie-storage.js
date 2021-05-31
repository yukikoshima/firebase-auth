// import createPersistedState from "vuex-persistedstate";
// import Cookies from "js-cookie";
// // import cookie from "cookie";

// export default ({ store, req, isDev }) => {
//   createPersistedState({
//     key: "firebase-auth",
//     paths: ["firebase/user/isLogind"],
//     storage: {
//       getItem: key =>
//         process.client
//           ? Cookies.getJSON(key)
//           : cookie.parse(req.headers.cookie || "")[key],
//       setItem: (key, value) =>
//         Cookies.set(key, value, { expires: 365, secure: !isDev }),
//       removeItem: key => Cookies.remove(key)
//     }
//   });
// };
