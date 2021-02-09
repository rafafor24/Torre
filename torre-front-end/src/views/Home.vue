<template>
  <div class="home">
    <h1>🐾🐕Hello traveler!👋</h1>
    <img class="shibe" :src="shibeImage" />
    <h1>
      In this page you can search for a opportunity avaliable in
      <a class="link" target="_blank" href="https://torre.co/"
        >🔗 Torre.co 🌐</a
      >
      and rank it among similar opportunities.
    </h1>
    <h1>
      Go to
      <strong class="link">
        <router-link to="/compare">'Rank Opportunity' 🖥️</router-link>
      </strong>
      and start your research, Good Luck!🍀
    </h1>
    <div>
      <img class="vue_logo" alt="Vue logo" src="../assets/logo.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore, store } from "../store";

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
    shibeImage: {
      get(): string {
        const store = useStore();
        return store.state.shibeImage;
      },
    },
  },
  mounted() {
    // fetching data as soon as the component's been mounted
    const store = useStore();
    store.dispatch("fetchShibe");
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  h1 {
    color: #dfe3e8;
  }
  .vue_logo {
    width: 50px;
  }
  .shibe {
    width: 20%;
    height: 20%;
  }
  .link {
    color: #cddc39;
    transition: all 0.25s ease;
    &:hover {
      transform: scale(1.1, 1.1);
      background-color: #575a5d;
      h2 {
        color: black;
      }
    }
  }
}
</style>