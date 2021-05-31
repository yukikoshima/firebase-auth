import firebase from "../plugins/firebase";

export default function({ route, store, redirect }) {
  // firebase.auth().onAuthStateChanged(user => {
  //   if (user) {
  //     if (route.path === "/auth/signin") {
  //       redirect("/");
  //     }
  //   } else {
  //     if (route.path !== "/auth/signin") {
  //       redirect("/auth/signin");
  //     }
  //   }
  // });
  // console.log(store.state.firebase.user.isLogind);
  if (store.state.users.user.isLogind) {
    console.log("ログイン済み");
    if (route.path === "/auth/signin") {
      redirect("/");
    }
  } else {
    console.log("まだログインしてないよ");
    if (route.path !== "/auth/signin") {
      redirect("/auth/signin");
    }
  }
}
