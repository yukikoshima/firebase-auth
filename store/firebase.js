import firebase from "@/plugins/firebase";

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
        console.log("logout成功");
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
  }
};
