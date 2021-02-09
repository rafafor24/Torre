<template>
  <div
    class="item"
    v-for="(opportunity, index) in opportunities"
    :key="opportunity.id"
    v-bind:class="[
      opportunityId === opportunity.id
        ? 'primaryOpportunity'
        : 'normalOpportunity',
    ]"
  >
    <div class="opportunity_details">
      <h1>{{ medalEmojis[index] ? medalEmojis[index] : "" }}</h1>
      <h2>
        {{ opportunity.objective + " - Status: " + opportunity.status + " - " }}
      </h2>
      <img class="logo-company" v-bind:src="opportunity.imageURL" />
      <div class="opportunity_url">
        <a
          target="_blank"
          :href="'https://torre.co/jobs/' + opportunity.id"
          role="button"
        >
          🔗 Go to the Opportunity in Torre.co 🌐
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return { medalEmojis: ["🏆🏆🏆🥇🥇🥇🏆🏆🏆", "🏆🏆🥈🥈🏆🏆", "🏆🥉🏆"] };
  },
  props: {
    opportunities: [],
    opportunityId: "",
  },
})
export default class OpportunitiesListView extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.primaryOpportunity {
  border-radius: 50px;
  border: 3px solid rgb(197, 59, 35);
}
.normalOpportunity {
  border-radius: 15px;
  border: 1px solid #dfe3e8;
}
.item {
  padding: 20px;
  margin: 10px;
  background-color: #383b40;
  box-sizing: border-box;

  .item__user {
    font-weight: bold;
  }
  .opportunity_url {
    align-content: center;
    margin: 10px;
  }
  h2 {
    color: #dfe3e8;
  }
  a {
    padding: 10px 20px;
    margin: 15px;
    border-radius: 5px;
    border: 3px solid #cddc39;
    background-color: #b3b7be;
    color: #010101;
    font-weight: bold;
    font-size: 25px;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      transform: scale(1.1, 1.1);
      background-color: #cddc39;
      h2 {
        color: black;
      }
    }
  }
}
</style>
