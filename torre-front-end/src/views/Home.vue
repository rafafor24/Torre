<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="helloMessage" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useStore } from "../store";

@Options({
  components: {
    HelloWorld,
  },
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
