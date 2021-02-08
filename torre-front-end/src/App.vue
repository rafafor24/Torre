<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation__logo">Home</div>
      </router-link>
      <router-link to="/compare">
        <div class="navigation__user">Compare Opportunities</div>
      </router-link>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #383b40;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 30px 5%;
    background-color: #27292d;
    color: #f2f3f4;
    border-radius: 3px;
    border: 0.5px solid #dfe3e8;
    .navigation__logo {
      font-weight: bold;
      font-size: 34px;
      &:hover {
        color: #cddc39;
      }
    }
    .navigation__user {
      font-weight: bold;
      font-size: 24px;
      &:hover {
        color: #cddc39;
      }
    }
  }
}
</style>
