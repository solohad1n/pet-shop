<template>
  <div>
    <h1>This is the id {{ $route.params.id }}</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="product" v-bind:src="product.image" />
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{ product.title }}</h1>
        <p v-html="product.description"></p>
        <p class="price">
          {{ product.price }}
        </p>
        <button @click="edit">Edit Product</button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: "",
    };
  },
  created: function () {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then(({ data }) => (this.product = data));
  },
  methods: {
    edit() {
      this.$router.push({ name: "Edit" });
    },
  },
};
</script>

<style>
</style>