<template>
  <div id="app">
    <nav>
      <div class="navigation__about">
        <router-link class="content" to="/">🐶 WHAT IS THIS? </router-link>
      </div>
      <div class="navigation__name">
        <div class="content">dogesrating.com</div>
      </div>
      <div class="navigation__compare">
        <router-link class="content" to="/compare">
          🎖️RANK OPPORTUNITY🏅
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
    .navigation__about {
      font-weight: bold;
      font-size: 30px;
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
    .navigation__compare {
      font-weight: bold;
      font-size: 20px;
      &:hover {
        transform: scale(1.1, 1.1);
        color: #cddc39;
      }
      .content {
        border-bottom: 6px solid #cddc39;
      }
    }
    .navigation__name {
      font-weight: bold;
      font-size: 24px;
      .content {
        border-bottom: 6px solid #f2f3f4;
      }
    }
  }
}
</style>
