<template>
  <div class="compare-opportunities">
    <div class="searchbar">
      <h1 class="title">Find your opportunity</h1>
      <form>
        <textarea
          placeholder="Ex. Torre Labs"
          name="searchbar"
          rows="1"
          cols="40"
          v-model="searchText"
        ></textarea>
      </form>
      <button @click="searchOpportunities()">Search</button>
    </div>
    <div
      class="item"
      v-for="opportunity in opportunities"
      :key="opportunity.id"
      @click="searchOpportunity(opportunity.id)"
    >
      <router-link
        :to="{ name: 'Opportunity', params: { id: opportunity.id } }"
      >
        <div class="navigation__user">
          <h2>
            {{
              opportunity.objective +
              " - " +
              opportunity.status +
              " - " +
              opportunity.id
            }}
          </h2>
        </div>
      </router-link>
    </div>
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
    searchOpportunities(): void {
      if (this.searchText != "") {
        store.dispatch("fetchData", { term: this.searchText });
      }
    },
    searchOpportunity(id: string): void {
      console.log(this.searchText);
      store.dispatch("fetchOpportunity", id);
    },
  },
  mounted() {
    // fetching data as soon as the component's been mounted
    const store = useStore();
    store.dispatch("fetchData");
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.compare-opportunities {
  padding: 50px 5%;
  background-color: #010101;
  textarea {
    border: 1px solid #dfe3e8;
    border-radius: 5px;
    font-size: 25px;
  }
  button {
    padding: 5px 20px;
    margin: auto 0;
    border-radius: 5px;
    border: none;
    background-color: #cddc39;
    color: #010101;
    font-weight: bold;
    font-size: 25px;
  }
  .searchbar {
    padding: 20px;
    margin: 50px;
    background-color: #383b40;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    box-sizing: border-box;
    cursor: pointer;
  }
  .item {
    padding: 20px;
    margin: 10px;
    background-color: #383b40;
    border-radius: 5px;
    border: 1px solid #cddc39;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      transform: scale(1.1, 1.1);
      background-color: #cddc39;
      h2 {
        color: black;
      }
    }
    .item__user {
      font-weight: bold;
    }
    h2 {
      color: #dfe3e8;
    }
  }
  .title {
    color: #dfe3e8;
  }
}
</style>