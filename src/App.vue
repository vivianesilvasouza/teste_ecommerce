<template>
  <div id="nav">
    <div class="logo">
      <img src="./assets/yampi-logo.png" />
    </div>
    <div class="item search right" tabindex="0">
      <div class="search-group">
        <input type="text" />
        <i class="material-icons search-icon"> search </i>
      </div>
    </div>

    <a href="" class="item">
      <div class="group">
        <router-link to="/basket">
          <i class="material-icons"> shopping_cart </i>
          ({{ this.productsInBag.length }})
        </router-link>
      </div>
    </a>
    <router-link to="/">Home</router-link> -
    <ul v-for="item in this.categories" :key="item">
      <router-link
        :to="'/Categories/' + item"
        @click="this.$store.dispatch('filteredItems', item)"
      >
        <li>{{ item }}</li>
      </router-link>
    </ul>
  </div>
  <router-view />
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {},

  created() {
    this.$store.dispatch("loadProducts");
    this.$store.dispatch("loadCategories");
  },

  computed: mapState(["productsInBag", "categories"]),
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 15% auto;
}

#nav {
  padding: 16px 0;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background: #f3f2f3;
  color: rgb(212, 16, 147);
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;

  .item {
    padding: 10px;
    text-decoration: none;
    color: rgb(235, 12, 235);
    color: var(--theme-color);
  }

  .item.right {
    margin: 0 0 0 auto;
  }

  .logo img {
    max-width: 100px;
    max-height: 150px;
  }

  .item.search {
    transition: 0.2s linear;
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }

  .item.search .search-icon {
    border-left: 1px solid grey;
    margin: 2px;
    padding-left: 10px;
    cursor: pointer;
    color: grey;
  }

  .item.search .search-icon:hover {
    color: black;
  }

  .item.search input {
    width: 100%;
    padding: 6px;
    outline: none;
    border: 2px solid grey;
    max-width: 100%;
    border: 0;
  }

  .item .search-group {
    display: flex;
    width: 100%;
    max-width: 700px;
    border-radius: 20px;
    border: 2px solid grey;
    overflow: hidden;
    background: white;

    border-color: white;
    color: var(--theme-color);
  }

  .item .search-group select {
    border: 0;
    margin: 2px;
    border-right: 1px solid grey;
    max-width: 5em;
    outline: none;
    color: grey;
  }

  .item .group {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    float: right;
    margin: 10px;
  }

  .item .group .sub {
    font-size: 0.8em;
  }

  .material-icons {
    font-size: 1.8rem;
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 700px) {
    .item.search input {
      display: none;
    }

    .menu-icon {
      display: block;
    }

    .detail,
    .logo .text {
      display: none;
    }
  }

  .action-btn {
    background-color: transparent;
    border: none;
  }

  a {
    color: rgb(241, 22, 187);
    text-decoration: none;

    &.router-link-exact-active {
      color: #07284b;
    }
  }

  ul {
    text-align: center;
    list-style-type: none;
    list-style-type: none;
    margin: 0;
    padding: 15px;
    display: inline;

    li {
      display: inline;
      font-family: "Fira Sans", sans-serif;
      font-size: 17px;

      a {
        color: #f2f2f2;
        text-decoration: none;
        padding: 14px;

        &:hover {
          background-color: #111;
        }
      }
    }
  }
}
</style>
