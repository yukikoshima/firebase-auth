<template>
  <div>
    <h1>login great!!</h1>
    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
    <v-btn @click="logout">Logout</v-btn>
    <nuxt-link to="/test">testページ</nuxt-link><br />
    {{ $store.state.users.user }}
  </div>
</template>

<script>
// import firebase from "../plugins/firebase";

export default {
  // beforeCreate() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user);
  //     if (user) {
  //       // if (route.path === "/auth/signin") {
  //       // return redirect("/");
  //       // }
  //       console.log(this.$router.options);
  //       this.$router.push("/");
  //     } else {
  //       // if (route.path !== "/auth/signin") {
  //       // return redirect("/auth/signin");
  //       // }
  //       this.$router.push("/auth/signin");
  //     }
  //   });
  // },
  methods: {
    logout() {
      this.$store.dispatch("users/logout");
    }
  }
};
</script>
