<template>
  <div>
    <h1>login great!!</h1>
    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
    <v-btn @click="logout">Logout</v-btn>
    <nuxt-link to="/test">testページ</nuxt-link><br />
    {{ $store.state.firebase.user }}
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  // created() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log("yuki");
  //       // this.$router.push("/");

  //       // this.$store.dispatch("firebase/setLogind");
  //       // } else {
  //       //   if (route.path !== "/auth/signin") {
  //       //     redirect("/auth/signin");
  //       //   }
  //     }
  //   });
  // },
  methods: {
    logout() {
      this.$store.dispatch("firebase/logout");
    }
  }
};
</script>
