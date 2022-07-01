<template>
  <div class="categories">
    <div class="products">
      <div
        v-for="(product, index) in this.productsCategory"
        :key="index"
        class="product"
        :class="{ inBag: isInBag(product) }"
      >
        <div
          class="product-image"
          :style="{ backgroundImage: 'url(' + product.image + ')' }"
        ></div>
        <h3>{{ product.title }}</h3>
        <h4>{{ product.category }}</h4>
        <p class="price">R$ {{ formatPrice(product.price) }}</p>
         <router-link :to="'/product/' + product.id">
        <button class="button button2"> + Detahes</button>
        </router-link>
        <button
          class="button button2"
          v-if="!isInBag(product)"
          @click="addtoBag(product)"
        >
          Adicionar ao carrinho
        </button>
        <button
          v-else
          class="remove"
          @click="this.$store.dispatch('removeFromBag', product.id)"
        >
          Remover o produto do carrinho
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Categories",
  data() {
    return {};
  },
  computed: mapState(["productsInBag", "categories", "productsCategory"]),

  methods: {
    addtoBag(product) {
      product.quantity = 1;
      this.$store.dispatch("addtoBag", product);
    },
    isInBag(product) {
      return this.productsInBag.find((item) => item.id == product.id);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style lang="scss">
.categories {
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .product {
      flex: 0 0 30%;
      display: grid;
      box-sizing: border-box;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      margin: 8px;

      .product-image {
        margin: 20px auto;
        width: 160px;
        height: 140px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      h4 {
        margin: 22px auto;
        font-size: 12px;
        max-width: 60%;
        font-weight: normal;
      }
      p.price {
        font-size: 20px;
        font-weight: bold;
      }

      .button {
        background-color: rgb(212, 16, 147);
        border-radius: 100px;
        color: white;
        border: none;
        padding: 9px 19px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
      }
      .button2:hover {
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
          0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
     
    }
  }
}
</style>
