import firebase from "firebase";

export default function({ route, store, redirect }) {
  firebase.auth().onAuthStateChanged(user => {
    console.log(app);
    if (user) {
      if (route.path === "/auth/signin") {
        redirect("/");
      }
    } else {
      if (route.path !== "/auth/signin") {
        redirect("/auth/signin");
      }
    }
  });

  // console.log(store.state.firebase.user.isLogind);

  // if (store.state.firebase.user.isLogind) {
  //   console.log("ログイン済み");
  //   console.log(route.path);
  //   if (route.path === "/auth/signin") {
  //     redirect("/");
  //   }
  // } else {
  //   console.log("ログインじゃないよ");
  //   if (route.path !== "/auth/signin") {
  //     redirect("/auth/signin");
  //   }
  // }
}
