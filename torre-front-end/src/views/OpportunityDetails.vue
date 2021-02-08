<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">
          <strong>{{ opportunity.objective }} </strong>
        </h1>
        <img class="logo-company" v-bind:src="opportunity.imageURL" />
        <div class="user-profile__follower-count">
          {{ "Status: " + opportunity.status + "." }}
        </div>
        <button @click="searchSimilarOpportunities(opportunity.id)">
          Search Similar Opportunities
        </button>
      </div>
    </div>
    <OpportunitiesListView
      v-if="similarOpportunities"
      :opportunities="similarOpportunities"
      :clickable="false"
    ></OpportunitiesListView>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore, store } from "../store";
import { useRoute } from "vue-router";
import { Opportunity } from "@/store/types";
import OpportunitiesListView from "@/components/OpportunitiesListView.vue"; // @ is an alias to /src

@Options({
  components: {
    OpportunitiesListView,
  },
  data() {
    const route = useRoute();
    return {
      id: route.params.id,
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
  },
  methods: {
    searchSimilarOpportunities(id: string): void {
      store.dispatch("fetchSimilarOpportunities", id);
    },
    searchOpportunity(id: string): void {
      console.log(this.searchText);
      store.dispatch("fetchOpportunity", id);
    },
  },
  mounted() {
    // fetching data as soon as the component's been mounted
    const store = useStore();
    store.dispatch("fetchOpportunity", this.id);
  },
})
export default class OpportunityDetails extends Vue {}
</script>

<style lang="scss" scoped>
.user-profile {
  color: #dfe3e8;
  padding: 50px 5%;
  background-color: #010101;
  .user-profile__user-panel {
    padding: 20px;
    background-color: #383b40;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;
    h1 {
      margin: 0;
    }
    button {
      padding: 5px 20px;
      border-radius: 5px;
      border: none;
      background-color: #cddc39;
      color: #010101;
      font-weight: bold;
      font-size: 25px;
    }
    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }
  .user-profile__twoots-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }
}
</style>