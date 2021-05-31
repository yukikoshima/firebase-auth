<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (this.$route.path === "/auth/signin") {
          this.$router.push("/");
        }
      } else {
        if (this.$route.path !== "/auth/signin") {
          this.$router.push("/auth/signin");
        }
      }
    });
  }
};
</script>
