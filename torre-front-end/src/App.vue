<template>
  <div id="app">
    <nav>
      <div class="navigation__logo">
        <router-link class="content" to="/">WHAT IS THIS? </router-link>
      </div>
      <div class="navigation__user">
        <router-link class="content" to="/compare">
          COMPARE OPPORTUNITIES
        </router-link>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(./fonts/Montserrat/Montserrat-Regular.ttf) format("truetype");
}

#app {
  font-family: "Montserrat", Helvetica, Arial;
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
      height: 100%;
      display: flex;
      flex-direction: column;
      &:hover {
        transform: scale(1.1, 1.1);
        color: #cddc39;
      }
      .content {
        border-bottom: 8px solid #cddc39;
      }
    }
    .navigation__user {
      font-weight: bold;
      font-size: 24px;
      &:hover {
        transform: scale(1.1, 1.1);
        color: #cddc39;
      }
      .content {
        border-bottom: 6px solid #cddc39;
      }
    }
  }
}
</style>
