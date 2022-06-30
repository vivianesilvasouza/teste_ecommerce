<template>
  <div class="basket">
    <div class="items">
        <template v-if="productsInBag.length">
            <div v-for="(product, index) in productsInBag" :key="index" class="item">
              <div class="remove" @click="this.$store.dispatch('removeFromBag', product.id)">Remover Produto</div>
              <div class="photo"><img :src="product.image" alt=""></div>
              <div class="description">
                 {{product.title}} </div>
              <div class="price">
                <span class="quantity-area">
                  <button :disabled="product.quantity<=1" @click="product.quantity--">-</button>
                  <span class="quantity">{{product.quantity}}</span>
                  <button  @click="product.quantity++">+</button>
                </span>
                <span class="amount">R$ {{formatPrice(product.price) }}</span>
              </div>
            </div>
            <div class="grand-total"> Total do pedido: R$ {{formatPrice(orderTotal())}}</div>
             <button class="button"><span>Finalizar Pedido </span></button>
        </template>

        <template v-else>
            <h3>Seu carrinho está vazio</h3>
        </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Basket',

  methods: {
    //total do pedido
   orderTotal(){
        let total = 0;
        this.productsInBag.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
   },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },

  computed: 
    mapState ([
     'productsInBag'
    ]),
 
}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }
//estilo para botão finalizar pedido
.button {
    border-radius: 4px;
    background-color: #e908b1;
    border: none;
    color: white;
    text-align: center;
    font-size: 18px;
    padding: 20px;
    width: 200px;
    cursor: pointer;
    margin: 5px;
}
  .button span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}
.button span {
    position: relative;
    transition: 0.5s;
}
//Efeito ao passar o mouse
.button:hover span {
    padding-right: 25px;
}
.button:hover span:after {
    opacity: 1;
    right: 0;
}
//Colocando a seta
.button span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

//Efeito ao passar o mouse
.button:hover span {
    padding-right: 25px;
}
.button:hover span:after {
    opacity: 1;
    right: 0;
}


}

</style>
