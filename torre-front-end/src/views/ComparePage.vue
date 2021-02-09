<template>
  <div class="compare-opportunities">
    <div class="searchbar">
      <h1 class="title">🔍Find your opportunity🔎</h1>
      <form>
        <textarea
          placeholder="Ex. Torre Labs"
          name="searchbar"
          rows="1"
          cols="25"
          v-model="searchText"
        ></textarea>
      </form>
      <button @click="searchOpportunities()">Search🧐</button>
    </div>
    <h1 v-if="opportunities && opportunitiesLoaded" class="title">Results:</h1>
    <OpportunitiesList
      v-if="opportunities"
      :opportunities="opportunities"
    ></OpportunitiesList>
    <img
      v-if="!opportunitiesLoaded && loading"
      class="logo-company"
      src="@/assets/loading.gif"
    />
  </div>
</template>

<script lang="ts">
import { Opportunity } from "@/store/types";
import { Options, Vue } from "vue-class-component";
import { useStore, store } from "../store";
import OpportunitiesList from "@/components/OpportunitiesList.vue"; // @ is an alias to /src

@Options({
  components: {
    OpportunitiesList,
  },
  data() {
    return {
      searchText: "",
      loading: false,
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
    opportunitiesLoaded: {
      get(): boolean {
        const store = useStore();
        return store.state.loaded;
      },
    },
  },
  methods: {
    searchOpportunities(): void {
      if (this.searchText != "") {
        this.loading = true;
        store.dispatch("fetchData", this.searchText);
        this.searchText = "";
      }
    },
    searchOpportunity(id: string): void {
      store.dispatch("fetchOpportunity", id);
    },
  },
  unmounted() {
    this.loading = false;
    const store = useStore();
    store.dispatch("clearOpportunities");
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.compare-opportunities {
  padding: 30px 5%;
  background-color: #010101;
  textarea {
    border: 1px solid #dfe3e8;
    border-radius: 5px;
    font-size: 25px;
    max-width: 100%;
  }
  .searchbar {
    padding: 20px;
    margin: 50px;
    background-color: #383b40;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    box-sizing: border-box;
  }
  .title {
    color: #dfe3e8;
  }
}
</style>