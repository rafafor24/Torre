<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">
          <strong>{{ opportunity.objective }} </strong>
        </h1>
        <div class="user-profile__follower-count">
          {{ "Status: " + opportunity.status + "." }}
        </div>
        <img class="logo-company" v-bind:src="opportunity.imageURL" />
        <button @click="searchSimilarOpportunities(opportunity.id)"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore, store } from "../store";
import { useRoute } from "vue-router";
import { Opportunity } from "@/store/types";

@Options({
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
  },
  methods: {
    searchSimilarOpportunities(id: string): void {
      store.dispatch("fetchSimilarOpportunities", id);
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
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #383b40;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;
    h1 {
      margin: 0;
    }
    .logo-company {
      width: 100px;
      height: 100px;
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