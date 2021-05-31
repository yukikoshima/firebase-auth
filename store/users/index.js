import firebase from "@/plugins/firebase";
import Cookies from "js-cookie";

export const state = () => ({
  user: {
    isLogind: false,
    userId: "",
    userUid: ""
  }
});

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setLogind(state, payload) {
    console.log("kokoko");
    console.log(payload.isLogind);
    state.user.isLogind = payload.isLogind;
  }
};

export const getters = {
  getUser(state) {
    return state.user;
  }
};

export const actions = {
  login(context, payload) {
    console.log("login action");
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        const token = user.getIdToken();

        Cookies.set("auth_token", token);
        context.commit("setUser", {
          isLogind: true,
          userId: user.email,
          userUid: user.uid
        });

        this.$router.push("/");
      })
      .catch(error => {
        console.log("エラー : " + error.message);
        return;
      });
  },
  logout(context) {
    console.log("logout action");
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        Cookies.remove("auth_token");
        context.commit("setUser", {
          isLogind: false,
          userId: "",
          userUid: ""
        });
        this.$router.push("/auth/signin");
      })
      .catch(error => {
        // An error happened.
        console.log("logout失敗");
      });
  },
  setLogind(context) {
    context.commit("setLogind", { isLogind: true });
  }
};
