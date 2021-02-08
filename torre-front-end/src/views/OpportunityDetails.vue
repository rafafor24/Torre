<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@rafafor</h1>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong>{{ id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "../store";
import { useRoute } from "vue-router";
import { computed } from "vue";

@Options({
  data() {
    const route = useRoute();

    return {
      id: route.params.id,
    };
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
export default class OpportunityDetails extends Vue {}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;
  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;
    h1 {
      margin: 0;
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