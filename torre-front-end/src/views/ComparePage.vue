<template>
  <div class="compare-opportunities">
    <div class="searchbar">
      <h1 class="title">🔍Find your opportunity🔎</h1>
      <h4>
        ℹ️ Your search will find coincidences in title, skills, members,
        organizations... basically everything related to the opportunity 💅
      </h4>
      <form>
        <textarea
          placeholder="Ex. Torre Labs"
          name="searchbar"
          rows="1"
          cols="25"
          v-model="searchText"
        ></textarea>
      </form>
      <h3 class="error" v-if="error.value">{{ error.message }}</h3>
      <button @click="searchOpportunities()">Search🧐</button>
    </div>
    <h1 v-if="opportunities && opportunitiesLoaded" class="title">
      {{ "Results for '" + lastSearch + "'" }}
    </h1>
    <h2 v-if="opportunities.length === 0 && opportunitiesLoaded" class="title">
      😕 We could not find any results for that search 🙃😵, please try another
      term 😅😅
    </h2>
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
      lastSearch: "",
      loading: false,
      error: { message: "", value: false },
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
        this.error = { message: "", value: false };
        store.dispatch("fetchData", this.searchText);
        this.lastSearch = this.searchText;
        this.searchText = "";
      } else {
        this.error = { message: "🚨 Enter some text! ⚠️", value: true };
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
  h4 {
    color: #dfe3e8;
  }
  .error {
    color: rgb(153, 29, 29);
    font-style: italic;
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