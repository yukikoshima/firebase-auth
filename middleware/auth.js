import firebase from "@/plugins/firebase";

export default function({ route, store, redirect }) {
  console.log(store.getters["firebase/getLogind"]);
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // console.log("ログイン済み");
      if (route.path === "/auth/signin") {
        redirect("/");
      }
    } else {
      if (route.path !== "/auth/signin") {
        redirect("/auth/signin");
      }
    }
  });
}
