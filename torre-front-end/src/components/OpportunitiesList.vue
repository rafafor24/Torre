<template>
  <router-link
    v-for="opportunity in opportunities"
    :key="opportunity.id"
    :to="{ name: 'Opportunity', params: { id: opportunity.id } }"
  >
    <div class="item">
      <img class="logo-company" v-bind:src="opportunity.imageURL" />
      <div class="opportunity_details">
        <h2>
          {{ opportunity.objective + " - " + opportunity.status }}
        </h2>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    opportunities: [],
  },
})
export default class OpportunitiesList extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
</style>
