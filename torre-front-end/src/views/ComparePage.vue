<template>
  <div class="compare-opportunities">
    <h1>{{ helloMessage }}</h1>
    <form>
      <textarea name="searchbar" rows="4" v-model="searchText"></textarea>
    </form>
    <button @click="searchOpportunity()">Search</button>
    <h1 v-for="opportunity in opportunities" :key="opportunity.name">
      {{ opportunity.objective + " - " + opportunity.status }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Opportunity } from "@/store/types";
import { Options, Vue } from "vue-class-component";
import { useStore, store } from "../store";

@Options({
  components: {},
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    helloMessage: {
      get(): string {
        const store = useStore();

        return store.state.loaded + "";
      },
    },
    opportunities: {
      get(): Opportunity[] {
        const store = useStore();
        return store.state.opportunities;
      },
    },
  },
  methods: {
    searchOpportunity(): void {
      console.log(this.searchText);
      store.dispatch("fetchData", { term: this.searchText });
    },
  },
  mounted() {
    // fetching data as soon as the component's been mounted
  },
})
export default class Home extends Vue {}
</script>