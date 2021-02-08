<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "../store";

@Options({
  computed: {
    helloMessage: {
      get(): string {
        const store = useStore();
        return store.state.opportunities[0]
          ? store.state.opportunities[0].status
          : "Empty";
      },
    },
  },
})
export default class Home extends Vue {}
</script>
