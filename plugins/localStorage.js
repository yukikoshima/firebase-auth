import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: "firebase-auth",
      storage: window.sessionStorage
    })(store);
  });
};
