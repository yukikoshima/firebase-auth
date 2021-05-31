import { getUserFromCookie } from "/helpers";

export const actions = {
  // 第 1 引数は Vuex context、第 2 引数は Nuxt.js context です
  nuxtServerInit({ dispatch }, { req }) {
    console.log("nuxtServerInit");
    const user = getUserFromCookie(req);
    // console.log(user);
    if (user) {
      console.log("jejeje");
      dispatch(
        "users/setLogind"
        // isLogind: true
        //   userId: user.email,
        //   userUid: user.uid
      );
    }
  }
};
