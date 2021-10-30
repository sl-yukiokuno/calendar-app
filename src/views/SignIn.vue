<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6 " class="text-center">
      <p class="display-1 py-12">
        カレンダーにサインインする
      </p>
      <div>
        <v-btn
          width="300"
          large
          color="#1DA1F2"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with Google
        </v-btn>
      </div>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#DD2A7B"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with FaceBook
        </v-btn>
      </div>

      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#3B5998"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with Apple
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup(prop, context) {
    /**
     * サインイン
     */
    const signIn = () => {
      context.root.$router.push('/');
    };

    return {
      signIn,
    };
  },
});
</script>
