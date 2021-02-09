<template>
  <div class="opportunity">
    <div class="opportunity__user-panel">
      <h1>
        <strong>{{ opportunity.objective }} </strong>
      </h1>
      <img class="logo-company" v-bind:src="opportunity.imageURL" />
      <div class="opportunity__status">
        {{ "Status: " + opportunity.status + "." }}
      </div>
      <button @click="searchSimilarOpportunities(opportunity.id)">
        Search Similar Opportunities
      </button>
    </div>
    <h1 v-if="similarOpportunitiesLoaded">
      <strong>Results:</strong>
    </h1>
    <OpportunitiesListView
      v-if="similarOpportunitiesLoaded"
      :opportunities="similarOpportunities"
      :clickable="false"
    ></OpportunitiesListView>
    <img
      v-if="!similarOpportunitiesLoaded && loading"
      class="logo-company"
      src="@/assets/loading.gif"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore, store } from "../store";
import { useRoute } from "vue-router";
import { Opportunity } from "@/store/types";
import OpportunitiesListView from "@/components/OpportunitiesListView.vue";

@Options({
  components: {
    OpportunitiesListView,
  },
  data() {
    const route = useRoute();
    return {
      id: route.params.id,
      loading: false,
    };
  },
  computed: {
    opportunity: {
      get(): Opportunity {
        const store = useStore();
        return store.state.opportunity;
      },
    },
    similarOpportunities: {
      get(): Opportunity[] {
        const store = useStore();
        return store.state.similarOpportunities;
      },
    },
    similarOpportunitiesLoaded: {
      get(): boolean {
        const store = useStore();
        return store.state.similarOpportunitiesLoaded;
      },
    },
  },
  methods: {
    searchSimilarOpportunities(id: string): void {
      this.loading = true;
      store.dispatch("fetchSimilarOpportunities", id);
    },
    searchOpportunity(id: string): void {
      store.dispatch("fetchOpportunity", id);
    },
  },
  mounted() {
    // fetching data as soon as the component's been mounted
    const store = useStore();
    store.dispatch("fetchOpportunity", this.id);
  },
  unmounted() {
    this.loading = false;
    const store = useStore();
    store.dispatch("clearSimilarOpportunities");
  },
})
export default class OpportunityDetails extends Vue {}
</script>

<style lang="scss" scoped>
.opportunity {
  color: #dfe3e8;
  padding: 50px 5%;
  background-color: #010101;
  .logo_company {
    padding: 15px;
  }
  .opportunity__user-panel {
    padding: 20px;
    background-color: #383b40;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;
    h1 {
      margin: 5px;
    }
    .opportunity__status {
      color: #dfe3e8;
      font-weight: bold;
      font-size: 25px;
      margin: 5px;
    }
  }
}
</style>