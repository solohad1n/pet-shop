<template>
  <main>
    
    <div v-for="product in sortedProducts" :key="product">
      <div class="row">
        <div class="col-md-5 col-md-offset-0">
          <figure>
            <img class="product" :src="product.image" > 
          </figure>
        </div>
        <div class="col-md-6 col-md-offset-0 description">
          <router-link class="row__title" tag="h1" :to="{ name : 'Id', params: {id: product.id}}" >{{product.title}}</router-link>
          <p v-html="product.description"></p>
          <p class="price">
            {{product.price | formatPrice}}
          </p>
          <button class=" btn btn-primary btn-lg"
          v-on:click="addToCart(product)"
          v-if="canAddToCart(product)">Add to cart</button>
          <button disabled="true" class=" btn btn-primary btn-lg"
          v-else >Add to cart</button>
          <span class="inventory-message"
          v-if="product.availableInventory - cartCount(product.id) === 0">All Out!
        </span>
        <span class="inventory-message"
        v-else-if="product.availableInventory - cartCount(product.id) < 5">
        Only {{product.availableInventory - cartCount(product.id)}} left!
      </span>
      <span class="inventory-message"
      v-else>Buy Now!
    </span>
    <div class="rating">
      <span  v-bind:class="{'rating-active' :checkRating(n, product)}"
      v-for="n in 5" :key="n" >☆
    </span>
  </div>
</div>
</div>
<hr />
</div>
</main>
</template>
<script>
export default {
  data() {
    return {
      products: {},
      cart: []
    };
  },
  methods: {
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    canAddToCart(aProduct) {
      return (
        aProduct.availableInventory >
        this.cartCount(aProduct.id)
      );
    },
    cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    }
  },
  computed: {
    cartItemCount() {
      return this.cart.length || '';
    },
    sortedProducts() {
      if (this.products.length > 0) {
        let productsArray = this.products.slice(0);
        function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase())
            return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase())
            return 1;
          return 0;
        }
        return productsArray.sort(compare);
      }
    }
  },
  filters: {
    formatPrice(price) {
      if (!parseInt(price)) {
        return '';
      }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split('').reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ',');
          index += 4;
        }
        return '$' + priceArray.reverse().join('');
      } else {
        return '$' + (price / 100).toFixed(2);
      }
    }
  },
  mounted: function () {
    axios.get('http://localhost:3000/products').then(response => this.products = response.data).catch(error => {
      console.log(error + 'массив не пришёл')
    })
  },
};
</script>

<style>
.row__title{
  cursor: pointer;
}
</style>